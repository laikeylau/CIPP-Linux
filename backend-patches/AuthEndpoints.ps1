# ============================================
# CIPP Auth HTTP Endpoints
# ============================================
# Place these files in:
# CIPP-API/Modules/CIPPHTTP/Public/Entrypoints/HTTP Functions/CIPP/Auth/
# ============================================

# ---- FILE: Invoke-AuthRegister.ps1 ----
function Invoke-AuthRegister {
    <#
    .SYNOPSIS
        Register a new CIPP user
    .DESCRIPTION
        Creates a new local user account. First user becomes admin.
    .FUNCTIONALITY
        Entrypoint
    .Role
        Public
    #>
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

# ---- FILE: Invoke-AuthLogin.ps1 ----
function Invoke-AuthLogin {
    <#
    .SYNOPSIS
        Login a CIPP user
    .DESCRIPTION
        Authenticates a local user and returns a JWT token
    .FUNCTIONALITY
        Entrypoint
    .Role
        Public
    #>
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

# ---- FILE: Invoke-AuthVerify.ps1 ----
function Invoke-AuthVerify {
    <#
    .SYNOPSIS
        Verify a JWT token
    .DESCRIPTION
        Verifies a JWT token is still valid
    .FUNCTIONALITY
        Entrypoint
    .Role
        Public
    #>
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
