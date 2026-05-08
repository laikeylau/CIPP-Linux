# ============================================
# Backend Authentication Patch for Linux Deploy
# ============================================
#
# This file contains the modifications needed for CIPP-API to work
# without Azure Static Web Apps (SWA) authentication.
#
# The key change: Read JWT token from Authorization header instead of
# x-ms-client-principal header that SWA provides.
#
# Apply these changes to CIPP-API/Modules/CIPPCore/Public/Authentication/
# ============================================

# ============================================
# FILE: Test-CIPPAccess.ps1
# ============================================
# 
# Find this section (~line 53):
#
#     if ($Request.Headers.'x-ms-client-principal-idp' -eq 'aad' -and $Request.Headers.'x-ms-client-principal-name' -match '^[0-9a-fA-F]{8}-...') {
#         $Type = 'APIClient'
#
# And REPLACE the entire User branch (the else block starting at ~line 107):
#
#     } else {
#         $Type = 'User'
#         $User = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Request.Headers.'x-ms-client-principal')) | ConvertFrom-Json
#
# WITH this modified version:

# ---- BEGIN PATCH for Test-CIPPAccess.ps1 ----
# Replace the User branch (the else {} block) with:

    } else {
        $Type = 'User'
        
        # Check for SWA x-ms-client-principal header (Azure deployment)
        if ($Request.Headers.'x-ms-client-principal') {
            $User = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Request.Headers.'x-ms-client-principal')) | ConvertFrom-Json
        }
        # Check for JWT token in Authorization header (Linux deployment)
        elseif ($Request.Headers.'Authorization' -match '^Bearer\s+(.+)$') {
            $JwtToken = $Matches[1]
            $User = Validate-CippJwtToken -Token $JwtToken
            if (-not $User) {
                throw 'Invalid or expired authentication token'
            }
        }
        else {
            throw 'No authentication credentials provided'
        }

        # ... rest of existing code continues unchanged ...
# ---- END PATCH ----

# ============================================
# FILE: New module: Validate-CippJwtToken.ps1
# ============================================
# Add this file to: CIPP-API/Modules/CIPPCore/Public/Authentication/
# (see the full file in this directory)

function Validate-CippJwtToken {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$Token
    )

    try {
        $parts = $Token.Split('.')
        if ($parts.Count -ne 3) {
            throw "Invalid JWT token format"
        }

        $payload = $parts[1]
        $mod = $payload.Length % 4
        if ($mod -gt 0) {
            $payload += ('=' * (4 - $mod))
        }
        $payload = $payload.Replace('-', '+').Replace('_', '/')

        $decodedBytes = [System.Convert]::FromBase64String($payload)
        $decodedJson = [System.Text.Encoding]::UTF8.GetString($decodedBytes)
        $claims = $decodedJson | ConvertFrom-Json

        $epoch = [DateTimeOffset]::FromUnixTimeSeconds($claims.exp)
        if ($epoch -lt [DateTimeOffset]::UtcNow) {
            throw "Token has expired"
        }

        $clientPrincipal = [PSCustomObject]@{
            userDetails = $claims.email ?? $claims.preferred_username ?? $claims.upn ?? $claims.sub
            userId      = $claims.oid ?? $claims.sub
            userRoles   = @('authenticated')
            identityProvider = 'aad'
            claims      = $claims
        }

        return $clientPrincipal
    }
    catch {
        Write-Warning "JWT validation failed: $($_.Exception.Message)"
        return $null
    }
}
