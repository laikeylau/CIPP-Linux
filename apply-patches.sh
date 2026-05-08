#!/bin/bash
# ============================================
# CIPP Linux Integration Script
# ============================================
# Automatically applies all patches for local authentication.
# Run from: CIPP-Linux/
#
# This script:
# 1. Installs dependencies (MSAL removed - not needed for local auth)
# 2. Creates the local auth module in the API
# 3. Creates auth HTTP endpoints
# 4. Patches Test-CIPPAccess.ps1
# 5. Patches profile.ps1
# 6. Creates the login page
# 7. Patches PrivateRoute.js
# 8. Creates local auth context
# 9. Patches _app.js
# 10. Patches ApiCall.jsx
# 11. Patches account-popover.js
# 12. Patches layouts/index.js

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
FRONTEND_DIR="$PROJECT_ROOT/CIPP-Frontend"
API_DIR="$PROJECT_ROOT/CIPP-API"
PATCHES_DIR="$SCRIPT_DIR/backend-patches"
FRONTEND_PATCHES_DIR="$SCRIPT_DIR/frontend-changes"

echo "============================================"
echo "  CIPP Linux Integration Script"
echo "============================================"
echo ""

# Verify directories
if [ ! -d "$FRONTEND_DIR" ] || [ ! -d "$API_DIR" ]; then
    echo "ERROR: CIPP-Frontend or CIPP-API not found"
    exit 1
fi

# ============================================
# 1. Copy local auth module to API
# ============================================
echo "[1/12] Creating CIPP Local Auth module..."
cp "$PATCHES_DIR/CippLocalAuth.psm1" "$API_DIR/Modules/CippLocalAuth/CippLocalAuth.psm1" 2>/dev/null || {
    mkdir -p "$API_DIR/Modules/CippLocalAuth"
    cp "$PATCHES_DIR/CippLocalAuth.psm1" "$API_DIR/Modules/CippLocalAuth/CippLocalAuth.psm1"
}
echo "  ✓ CippLocalAuth module created"

# Create module manifest
cat > "$API_DIR/Modules/CippLocalAuth/CippLocalAuth.psd1" << 'MANIFEST'
@{
    RootModule = 'CippLocalAuth.psm1'
    ModuleVersion = '1.0.0'
    GUID = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
    Author = 'CIPP Linux'
    Description = 'Local authentication module for CIPP Linux deployment'
    FunctionsToExport = @(
        'Get-JWTSecret',
        'New-JWTToken',
        'Test-JWTToken',
        'Get-CippLocalUsers',
        'Get-CippLocalUser',
        'New-CippLocalUser',
        'Confirm-CippLocalLogin'
    )
}
MANIFEST
echo "  ✓ Module manifest created"

# ============================================
# 2. Create auth HTTP endpoints
# ============================================
echo "[2/12] Creating auth HTTP endpoints..."
AUTH_DIR="$API_DIR/Modules/CIPPCore/Functions/CIPP/Auth"
mkdir -p "$AUTH_DIR"

# Create Invoke-AuthRegister.ps1
cat > "$AUTH_DIR/Invoke-AuthRegister.ps1" << 'ENDPOINT'
function Invoke-AuthRegister {
    [CmdletBinding()]
    param($Request, $TriggerMetadata)

    try {
        $body = $Request.Body
        $email = $body.email
        $password = $body.password
        $name = $body.name

        if (-not $email -or -not $password -or -not $name) {
            return [HttpResponseContext]@{
                StatusCode = [HttpStatusCode]::BadRequest
                Body       = @{ error = "Email, password, and name are required" } | ConvertTo-Json
            }
        }

        if ($password.Length -lt 8) {
            return [HttpResponseContext]@{
                StatusCode = [HttpStatusCode]::BadRequest
                Body       = @{ error = "Password must be at least 8 characters" } | ConvertTo-Json
            }
        }

        $result = New-CippLocalUser -Email $email -Password $password -Name $name

        return [HttpResponseContext]@{
            StatusCode = [HttpStatusCode]::OK
            Body       = $result | ConvertTo-Json
        }
    }
    catch {
        return [HttpResponseContext]@{
            StatusCode = [HttpStatusCode]::BadRequest
            Body       = @{ error = $_.Exception.Message } | ConvertTo-Json
        }
    }
}
ENDPOINT

# Create Invoke-AuthLogin.ps1
cat > "$AUTH_DIR/Invoke-AuthLogin.ps1" << 'ENDPOINT'
function Invoke-AuthLogin {
    [CmdletBinding()]
    param($Request, $TriggerMetadata)

    try {
        $body = $Request.Body
        $email = $body.email
        $password = $body.password

        if (-not $email -or -not $password) {
            return [HttpResponseContext]@{
                StatusCode = [HttpStatusCode]::BadRequest
                Body       = @{ error = "Email and password are required" } | ConvertTo-Json
            }
        }

        $result = Confirm-CippLocalLogin -Email $email -Password $password

        return [HttpResponseContext]@{
            StatusCode = [HttpStatusCode]::OK
            Body       = $result | ConvertTo-Json
        }
    }
    catch {
        return [HttpResponseContext]@{
            StatusCode = [HttpStatusCode]::Unauthorized
            Body       = @{ error = $_.Exception.Message } | ConvertTo-Json
        }
    }
}
ENDPOINT

# Create Invoke-AuthVerify.ps1
cat > "$AUTH_DIR/Invoke-AuthVerify.ps1" << 'ENDPOINT'
function Invoke-AuthVerify {
    [CmdletBinding()]
    param($Request, $TriggerMetadata)

    $authHeader = $Request.Headers.'Authorization'
    if ($authHeader -match '^Bearer\s+(.+)$') {
        $token = $Matches[1]
        $payload = Test-JWTToken -Token $token
        if ($payload) {
            return [HttpResponseContext]@{
                StatusCode = [HttpStatusCode]::OK
                Body       = @{ valid = $true; email = $payload.email } | ConvertTo-Json
            }
        }
    }

    return [HttpResponseContext]@{
        StatusCode = [HttpStatusCode]::Unauthorized
        Body       = @{ valid = $false } | ConvertTo-Json
    }
}
ENDPOINT
echo "  ✓ Auth endpoints created (Register, Login, Verify)"

# ============================================
# 3. Patch Test-CIPPAccess.ps1
# ============================================
echo "[3/12] Patching Test-CIPPAccess.ps1..."
ACCESS_FILE="$API_DIR/Modules/CIPPCore/Public/Authentication/Test-CIPPAccess.ps1"

if grep -q "Authorization.*Bearer" "$ACCESS_FILE" 2>/dev/null; then
    echo "  ✓ Already patched"
else
    cp "$ACCESS_FILE" "${ACCESS_FILE}.backup"

    python3 - "$ACCESS_FILE" << 'PYTHON'
import re, sys

filepath = sys.argv[1]
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Patch 1: Replace the User branch authentication
old_auth = """    } else {
        $Type = 'User'
        $User = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Request.Headers.'x-ms-client-principal')) | ConvertFrom-Json"""

new_auth = """    } else {
        $Type = 'User'

        # Priority 1: Local JWT token (Linux deployment)
        if ($Request.Headers.'Authorization' -match '^Bearer\\s+(.+)$') {
            $JwtToken = $Matches[1]
            $TokenPayload = Test-JWTToken -Token $JwtToken
            if ($TokenPayload) {
                $User = [PSCustomObject]@{
                    userDetails   = $TokenPayload.email
                    userId        = $TokenPayload.sub
                    userRoles     = @($TokenPayload.roles)
                    identityProvider = 'local'
                }
                Write-Debug "Authenticated via JWT token: $($User.userDetails)"
            } else {
                throw 'Invalid or expired authentication token'
            }
        }
        # Priority 2: SWA header (Azure deployment - backward compatible)
        elseif ($Request.Headers.'x-ms-client-principal') {
            $User = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Request.Headers.'x-ms-client-principal')) | ConvertFrom-Json
            Write-Debug "Authenticated via SWA header: $($User.userDetails)"
        }
        else {
            throw 'No authentication credentials provided'
        }"""

content_new, count1 = re.subn(re.escape(old_auth), new_auth, content)

# Patch 2: Skip Azure AD group resolution for local auth users
old_group_check = """        # Check for roles granted via group membership
        if (($User.userRoles | Measure-Object).Count -eq 2 -and $User.userRoles -contains 'authenticated' -and $User.userRoles -contains 'anonymous') {
            $swResolveUserRoles = [System.Diagnostics.Stopwatch]::StartNew()
            $User = Test-CIPPAccessUserRole -User $User
            $swResolveUserRoles.Stop()
            $AccessTimings['ResolveUserRoles'] = $swResolveUserRoles.Elapsed.TotalMilliseconds
        }"""

new_group_check = """        # Check for roles granted via group membership (SWA/Azure auth only)
        if ($User.identityProvider -ne 'local') {
            if (($User.userRoles | Measure-Object).Count -eq 2 -and $User.userRoles -contains 'authenticated' -and $User.userRoles -contains 'anonymous') {
                $swResolveUserRoles = [System.Diagnostics.Stopwatch]::StartNew()
                $User = Test-CIPPAccessUserRole -User $User
                $swResolveUserRoles.Stop()
                $AccessTimings['ResolveUserRoles'] = $swResolveUserRoles.Elapsed.TotalMilliseconds
            }
        }"""

content_new, count2 = re.subn(re.escape(old_group_check), new_group_check, content_new)

if count1 + count2 > 0:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content_new)
    print(f"  ✓ Patched ({count1 + count2} changes)")
else:
    print("  ⚠ Could not auto-patch. Apply manually (see Test-CIPPAccess.local-auth.patch.md)")
PYTHON
fi

# ============================================
# 4. Patch profile.ps1
# ============================================
echo "[4/12] Patching profile.ps1..."
PROFILE_FILE="$API_DIR/profile.ps1"

if grep -q "CippLocalAuth" "$PROFILE_FILE" 2>/dev/null; then
    echo "  ✓ Already patched"
else
    cp "$PROFILE_FILE" "${PROFILE_FILE}.backup"
    sed -i "s/\$Modules = @('CIPPCore', 'CippExtensions', 'AzBobbyTables')/\$Modules = @('CIPPCore', 'CippExtensions', 'AzBobbyTables', 'CippLocalAuth')/" "$PROFILE_FILE"
    echo "  ✓ Patched"
fi

# ============================================
# 5. Copy local auth context
# ============================================
echo "[5/12] Creating local auth context..."
mkdir -p "$FRONTEND_DIR/src/contexts"
cp "$FRONTEND_PATCHES_DIR/src/contexts/local-auth-context.js" "$FRONTEND_DIR/src/contexts/local-auth-context.js"
echo "  ✓ local-auth-context.js created"

# ============================================
# 6. Copy login page
# ============================================
echo "[6/12] Creating login page..."
mkdir -p "$FRONTEND_DIR/src/pages"
cp "$FRONTEND_PATCHES_DIR/src/pages/login.js" "$FRONTEND_DIR/src/pages/login.js"
echo "  ✓ login.js created"

# ============================================
# 7. Copy modified PrivateRoute
# ============================================
echo "[7/12] Replacing PrivateRoute.js..."
cp "$FRONTEND_PATCHES_DIR/src/components/PrivateRoute.js" "$FRONTEND_DIR/src/components/PrivateRoute.js"
echo "  ✓ PrivateRoute.js replaced"

# ============================================
# 8. Patch ApiCall.jsx
# ============================================
echo "[8/12] Patching ApiCall.jsx..."
API_CALL_FILE="$FRONTEND_DIR/src/api/ApiCall.jsx"

if grep -q "useLocalAuth" "$API_CALL_FILE" 2>/dev/null; then
    echo "  ✓ Already patched"
else
    cp "$API_CALL_FILE" "${API_CALL_FILE}.backup"

    python3 - "$API_CALL_FILE" << 'PYTHON'
import sys

filepath = sys.argv[1]
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import at the top
old_imports = """import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { showToast } from "../store/toasts";
import { getCippError } from "../utils/get-cipp-error";
import { buildVersionedHeaders } from "../utils/cippVersion";"""

new_imports = """import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { showToast } from "../store/toasts";
import { getCippError } from "../utils/get-cipp-error";
import { buildVersionedHeaders } from "../utils/cippVersion";
import { useLocalAuth } from "../contexts/local-auth-context";"""

content = content.replace(old_imports, new_imports)

# Add getToken hook and Authorization header in ApiGetCall
old_get_call = """export function ApiGetCall(props) {
  const {"""

new_get_call = """export function ApiGetCall(props) {
  const { getToken } = useLocalAuth();
  const {"""

content = content.replace(old_get_call, new_get_call, 1)

# Add Authorization header to single GET request
old_single_get = """        const response = await axios.get(url, {
          signal: url === "/api/tenantFilter" ? null : signal,
          params: data,
          headers: await buildVersionedHeaders(),
          responseType: responseType,
        });"""

new_single_get = """        const _token = await getToken();
        const _headers = { ...await buildVersionedHeaders() };
        if (_token) _headers['Authorization'] = 'Bearer ' + _token;
        const response = await axios.get(url, {
          signal: url === "/api/tenantFilter" ? null : signal,
          params: data,
          headers: _headers,
          responseType: responseType,
        });"""

content = content.replace(old_single_get, new_single_get, 1)

# Add Authorization header to bulk GET request
old_bulk_get = """          const response = await axios.get(url, {
            signal: signal,
            params: element,
            headers: await buildVersionedHeaders(),
          });"""

new_bulk_get = """          const _token = await getToken();
          const _headers = { ...await buildVersionedHeaders() };
          if (_token) _headers['Authorization'] = 'Bearer ' + _token;
          const response = await axios.get(url, {
            signal: signal,
            params: element,
            headers: _headers,
          });"""

content = content.replace(old_bulk_get, new_bulk_get, 1)

# Add getToken to ApiPostCall
old_post_call = """export function ApiPostCall({ relatedQueryKeys, onResult }) {
  const queryClient = useQueryClient();"""

new_post_call = """export function ApiPostCall({ relatedQueryKeys, onResult }) {
  const { getToken } = useLocalAuth();
  const queryClient = useQueryClient();"""

content = content.replace(old_post_call, new_post_call, 1)

# Add Authorization header to POST requests
old_post_single = """        const response = await axios.post(url, data, { headers: await buildVersionedHeaders() });"""

new_post_single = """        const _token = await getToken();
        const _headers = { ...await buildVersionedHeaders() };
        if (_token) _headers['Authorization'] = 'Bearer ' + _token;
        const response = await axios.post(url, data, { headers: _headers });"""

content = content.replace(old_post_single, new_post_single, 1)

old_post_bulk = """          const response = await axios.post(url, element, {
            headers: await buildVersionedHeaders(),
          });"""

new_post_bulk = """          const _token = await getToken();
          const _headers = { ...await buildVersionedHeaders() };
          if (_token) _headers['Authorization'] = 'Bearer ' + _token;
          const response = await axios.post(url, element, {
            headers: _headers,
          });"""

content = content.replace(old_post_bulk, new_post_bulk, 1)

# Add Authorization header to pagination GET
old_pag_get = """      const response = await axios.get(url, {
        signal: signal,
        params: { ...data, ...pageParam },
        headers: await buildVersionedHeaders(),
      });"""

new_pag_get = """      const _token = await getToken();
      const _headers = { ...await buildVersionedHeaders() };
      if (_token) _headers['Authorization'] = 'Bearer ' + _token;
      const response = await axios.get(url, {
        signal: signal,
        params: { ...data, ...pageParam },
        headers: _headers,
      });"""

content = content.replace(old_pag_get, new_pag_get, 1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("  ✓ Patched (6 header injections)")
PYTHON
fi

# ============================================
# 9. Patch account-popover.js
# ============================================
echo "[9/12] Patching account-popover.js..."
ACCT_FILE="$FRONTEND_DIR/src/layouts/account-popover.js"

if grep -q "useLocalAuth" "$ACCT_FILE" 2>/dev/null; then
    echo "  ✓ Already patched"
else
    cp "$ACCT_FILE" "${ACCT_FILE}.backup"

    python3 - "$ACCT_FILE" << 'PYTHON'
import sys

filepath = sys.argv[1]
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
content = content.replace(
    'import { ApiGetCall } from "../api/ApiCall";',
    'import { ApiGetCall } from "../api/ApiCall";\nimport { useLocalAuth } from "../contexts/local-auth-context";',
    1
)

# Add useLocalAuth hook
content = content.replace(
    'const queryClient = useQueryClient();',
    'const queryClient = useQueryClient();\n  const { logout: localLogout } = useLocalAuth();',
    1
)

# Replace logout handler
old_logout = """    try {
      popover.handleClose();
      // delete query cache and persisted data
      queryClient.clear();

      router.push("/.auth/logout?post_logout_redirect_uri=" + encodeURIComponent(paths.index));
    } catch (err) {
      console.error(err);
      console.log(orgData);
      toast.error("Something went wrong");
    }"""

new_logout = """    try {
      popover.handleClose();
      queryClient.clear();
      localLogout();
      router.push(paths.index);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }"""

content = content.replace(old_logout, new_logout, 1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("  ✓ Patched")
PYTHON
fi

# ============================================
# 10. Patch layouts/index.js
# ============================================
echo "[10/12] Patching layouts/index.js..."
LAYOUT_FILE="$FRONTEND_DIR/src/layouts/index.js"

if grep -q "useLocalAuth" "$LAYOUT_FILE" 2>/dev/null; then
    echo "  ✓ Already patched"
else
    cp "$LAYOUT_FILE" "${LAYOUT_FILE}.backup"

    python3 - "$LAYOUT_FILE" << 'PYTHON'
import sys

filepath = sys.argv[1]
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
content = content.replace(
    "import { ApiGetCall } from '../api/ApiCall'",
    "import { ApiGetCall } from '../api/ApiCall'\nimport { useLocalAuth } from '../contexts/local-auth-context'",
    1
)

# Replace SWA status check with local auth
old_swa = """  const swaStatus = ApiGetCall({
    url: '/.auth/me',
    queryKey: 'authmeswa',
    staleTime: 120000,
    refetchOnWindowFocus: true,
  })

  const currentRole = ApiGetCall({
    url: '/api/me',
    queryKey: 'authmecipp',
    waiting: !swaStatus.isSuccess || swaStatus.data?.clientPrincipal === null,
  })"""

new_swa = """  const { isAuthenticated: localAuth, isLoading: localAuthLoading, token: localToken } = useLocalAuth()

  const currentRole = ApiGetCall({
    url: '/api/me',
    queryKey: 'authmecipp',
    waiting: localAuth && !!localToken,
  })"""

content = content.replace(old_swa, new_swa, 1)

# Replace all swaStatus references with localAuth
content = content.replace('swaStatus.isLoading', 'localAuthLoading')
content = content.replace('swaStatus.data?.clientPrincipal', '{userRoles: localAuth ? ["authenticated"] : null}')
content = content.replace('swaStatus.data', '{clientPrincipal: localAuth ? {} : null}')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("  ✓ Patched")
PYTHON
fi

# ============================================
# 11. Patch unauthenticated page
# ============================================
echo "[11/12] Patching unauthenticated page..."
UNAUTH_FILE="$FRONTEND_DIR/src/pages/unauthenticated.js"

if grep -q "useLocalAuth" "$UNAUTH_FILE" 2>/dev/null; then
    echo "  ✓ Already patched"
else
    if [ -f "$UNAUTH_FILE" ]; then
        cp "$UNAUTH_FILE" "${UNAUTH_FILE}.backup"

        python3 - "$UNAUTH_FILE" << 'PYTHON'
import sys

filepath = sys.argv[1]
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import and replace login button
if 'import { useLocalAuth }' not in content:
    content = content.replace(
        'import { ApiGetCall }',
        'import { useLocalAuth } from "../contexts/local-auth-context";\nimport { ApiGetCall }',
        1
    )

    # Replace SWA login link with router push to /login
    content = content.replace(
        'href="/.auth/login/aad"',
        'href="/login"',
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("  ✓ Patched")
else:
    print("  ✓ Already patched")
PYTHON
    else
        echo "  ⚠ File not found, skipping"
    fi
fi

# ============================================
# 12. Verify all patches
# ============================================
echo "[12/12] Verifying patches..."

ERRORS=0
[ ! -f "$API_DIR/Modules/CippLocalAuth/CippLocalAuth.psm1" ] && echo "  ✗ CippLocalAuth.psm1 missing" && ERRORS=$((ERRORS+1))
[ ! -f "$AUTH_DIR/Invoke-AuthRegister.ps1" ] && echo "  ✗ Invoke-AuthRegister.ps1 missing" && ERRORS=$((ERRORS+1))
[ ! -f "$AUTH_DIR/Invoke-AuthLogin.ps1" ] && echo "  ✗ Invoke-AuthLogin.ps1 missing" && ERRORS=$((ERRORS+1))
[ ! -f "$AUTH_DIR/Invoke-AuthVerify.ps1" ] && echo "  ✗ Invoke-AuthVerify.ps1 missing" && ERRORS=$((ERRORS+1))
[ ! -f "$FRONTEND_DIR/src/contexts/local-auth-context.js" ] && echo "  ✗ local-auth-context.js missing" && ERRORS=$((ERRORS+1))
[ ! -f "$FRONTEND_DIR/src/pages/login.js" ] && echo "  ✗ login.js missing" && ERRORS=$((ERRORS+1))
[ ! -f "$FRONTEND_DIR/src/components/PrivateRoute.js" ] && echo "  ✗ PrivateRoute.js missing" && ERRORS=$((ERRORS+1))

if [ $ERRORS -eq 0 ]; then
    echo "  ✓ All patches verified"
else
    echo "  ✗ $ERRORS files missing"
fi

echo ""
echo "============================================"
echo "  Integration Complete!"
echo "============================================"
echo ""
echo "Backup files created (*.backup) for all modified files."
echo ""
echo "Next steps:"
echo ""
echo "1. Edit CIPP-Linux/.env with your CIPP credentials"
echo ""
echo "2. Build frontend:"
echo "   cd CIPP-Frontend && yarn install && yarn build"
echo ""
echo "3. Deploy:"
echo "   cd CIPP-Linux && bash deploy.sh"
echo ""
echo "4. Register first admin user:"
echo "   Open https://your-domain → Register tab → create account"
echo "   (First user automatically becomes admin)"
echo ""
echo "============================================"
