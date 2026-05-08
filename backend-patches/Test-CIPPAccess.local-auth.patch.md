# ============================================
# Test-CIPPAccess.ps1 - Modified for Local Auth
# ============================================
# This is the KEY modification file.
# It replaces the SWA x-ms-client-principal based auth
# with local JWT token based auth.
#
# ORIGINAL LOCATION:
# CIPP-API/Modules/CIPPCore/Public/Authentication/Test-CIPPAccess.ps1
#
# CHANGE LOCATION:
# Find the User branch (around line 107) and replace it.
# ============================================

# ---- ORIGINAL CODE (REPLACE THIS) ----
# } else {
#     $Type = 'User'
#     $User = [System.Text.Encoding]::UTF8.GetString(
#         [System.Convert]::FromBase64String($Request.Headers.'x-ms-client-principal')
#     ) | ConvertFrom-Json

# ---- REPLACEMENT CODE ----
    } else {
        $Type = 'User'

        # Priority 1: Local JWT token (Linux deployment)
        if ($Request.Headers.'Authorization' -match '^Bearer\s+(.+)$') {
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
            $User = [System.Text.Encoding]::UTF8.GetString(
                [System.Convert]::FromBase64String($Request.Headers.'x-ms-client-principal')
            ) | ConvertFrom-Json
            Write-Debug "Authenticated via SWA header: $($User.userDetails)"
        }
        else {
            throw 'No authentication credentials provided'
        }
# ---- END REPLACEMENT ----


# ============================================
# ALSO MODIFY: The role resolution section
# ============================================
# Find this block (~line 120):
#
#     if (($User.userRoles | Measure-Object).Count -eq 2 -and 
#         $User.userRoles -contains 'authenticated' -and 
#         $User.userRoles -contains 'anonymous') {
#         $User = Test-CIPPAccessUserRole -User $User
#     }
#
# REPLACE WITH:

        # For local auth, don't try to resolve via Azure AD groups
        if ($User.identityProvider -ne 'local') {
            # Only try Azure AD group resolution for SWA/Azure users
            if (($User.userRoles | Measure-Object).Count -eq 2 -and
                $User.userRoles -contains 'authenticated' -and
                $User.userRoles -contains 'anonymous') {
                $User = Test-CIPPAccessUserRole -User $User
            }
        }
        # For local auth, roles are already in the JWT token
        # and the /api/me endpoint returns them directly.
