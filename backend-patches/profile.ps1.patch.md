# ============================================
# profile.ps1 Patch for Local Auth
# ============================================
# Add this import to CIPP-API/profile.ps1
# 
# Add AFTER the existing module imports (around line 58):
#
#     $Modules = @('CIPPCore', 'CippExtensions', 'AzBobbyTables')
#     foreach ($Module in $Modules) { ... }
#
# ADD THIS LINE AFTER:
#     Import-Module -Name (Join-Path $ModulesPath 'CippLocalAuth') -ErrorAction SilentlyContinue
#
# Or add 'CippLocalAuth' to the $Modules array:
#     $Modules = @('CIPPCore', 'CippExtensions', 'AzBobbyTables', 'CippLocalAuth')
#
# ============================================
#
# Also ensure the HTTP module loads the auth endpoints.
# The CIPPHTTP module auto-discovers functions in its Public directory,
# so placing the Invoke-Auth*.ps1 files there should be sufficient.
#
# ============================================

# ---- Patch for the $Modules array in profile.ps1 ----
# Find:
$Modules = @('CIPPCore', 'CippExtensions', 'AzBobbyTables')
# Replace with:
$Modules = @('CIPPCore', 'CippExtensions', 'AzBobbyTables', 'CippLocalAuth')
