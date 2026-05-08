#!/bin/bash
# ============================================
# Azure Deployment Quick Fix
# ============================================
# This script fixes the two common issues:
# 1. ZipDeploy failure
# 2. Authentication rejection
#
# Run this from the CIPP root directory with Azure CLI installed.
# ============================================

set -e

echo "============================================"
echo "  CIPP Azure Deployment Quick Fix"
echo "============================================"
echo ""

# Configuration
RESOURCE_GROUP="${AZURE_RESOURCE_GROUP:-LSYSTEX-M365-RG}"
SUBSCRIPTION="${AZURE_SUBSCRIPTION:-}"
FUNCTION_APP_NAME="${AZURE_FUNCTION_APP:-}"

# ============================================
# Step 1: Check prerequisites
# ============================================
echo "[Step 1] Checking prerequisites..."

if ! command -v az &> /dev/null; then
    echo "ERROR: Azure CLI not found. Install it first:"
    echo "  https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if logged in
az account show > /dev/null 2>&1 || {
    echo "Please log in to Azure CLI first:"
    az login
}

if [ -n "$SUBSCRIPTION" ]; then
    az account set --subscription "$SUBSCRIPTION"
fi

echo "  ✓ Azure CLI ready"
echo ""

# ============================================
# Step 2: Find resources
# ============================================
echo "[Step 2] Finding CIPP resources in resource group: $RESOURCE_GROUP"

# Find Function App
if [ -z "$FUNCTION_APP_NAME" ]; then
    FUNCTION_APP_NAME=$(az functionapp list \
        --resource-group "$RESOURCE_GROUP" \
        --query "[?contains(name, 'cipp')].name | [0]" \
        -o tsv 2>/dev/null)
fi

if [ -z "$FUNCTION_APP_NAME" ]; then
    echo "Could not auto-detect Function App."
    echo "Available Function Apps in $RESOURCE_GROUP:"
    az functionapp list --resource-group "$RESOURCE_GROUP" --query "[].name" -o tsv
    read -p "Enter Function App name: " FUNCTION_APP_NAME
fi

echo "  ✓ Function App: $FUNCTION_APP_NAME"

# Find SWA
SWA_NAME=$(az staticwebapp list \
    --resource-group "$RESOURCE_GROUP" \
    --query "[].name | [0]" \
    -o tsv 2>/dev/null)

if [ -n "$SWA_NAME" ]; then
    echo "  ✓ Static Web App: $SWA_NAME"
fi
echo ""

# ============================================
# Fix 1: ZipDeploy
# ============================================
echo "[Fix 1] Fixing ZipDeploy..."
echo ""
echo "The ARM template ZipDeploy uses an external URL that may be blocked."
echo "We'll deploy directly from local source instead."
echo ""

# Build the zip package
echo "Building API zip package..."
cd CIPP-API
TEMP_ZIP="/tmp/cipp-api-$(date +%s).zip"
zip -r "$TEMP_ZIP" . \
    -x ".git/*" \
    -x ".gitignore" \
    -x ".DS_Store" \
    -x "node_modules/*" \
    -x "Tests/*" \
    -x ".vscode/*" \
    -x "Tools/*" \
    -x ".github/*" \
    > /dev/null 2>&1
cd ..

echo "  Package size: $(du -h "$TEMP_ZIP" | cut -f1)"

# Deploy using Azure CLI (more reliable than ARM ZipDeploy)
echo "Deploying to Function App..."
az functionapp deployment source config-zip \
    --resource-group "$RESOURCE_GROUP" \
    --name "$FUNCTION_APP_NAME" \
    --src "$TEMP_ZIP" \
    --timeout 600

echo "  ✓ ZipDeploy completed successfully!"
echo ""

# Clean up
rm -f "$TEMP_ZIP"

# ============================================
# Fix 2: Authentication
# ============================================
echo "[Fix 2] Fixing authentication..."
echo ""

if [ -z "$SWA_NAME" ]; then
    echo "No Static Web App found. Skipping auth fix."
else
    echo "This will generate an invitation link for a CIPP admin user."
    echo ""
    echo "IMPORTANT: Users MUST use this invitation link to log in."
    echo "Simply being an Azure AD user is NOT enough."
    echo ""
    
    read -p "Enter admin email address: " ADMIN_EMAIL
    read -p "Enter role (readonly/editor/admin) [admin]: " ROLE
    ROLE=${ROLE:-admin}
    
    echo ""
    echo "Generating invitation link for $ADMIN_EMAIL with role '$ROLE'..."
    
    INVITE_RESULT=$(az staticwebapp users invite \
        --name "$SWA_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --user-details "$ADMIN_EMAIL" \
        --role "$ROLE" \
        --invitation-expiration-in-hours 168 \
        --query "invitationUrl" \
        -o tsv 2>/dev/null)
    
    if [ -n "$INVITE_RESULT" ]; then
        echo ""
        echo "============================================"
        echo "  Invitation Link Generated!"
        echo "============================================"
        echo ""
        echo "  Link: $INVITE_RESULT"
        echo ""
        echo "  Share this link with $ADMIN_EMAIL"
        echo "  They MUST click this link to log in."
        echo "  The link expires in 7 days."
        echo ""
    else
        echo "  Could not generate invitation link."
        echo "  Trying alternative method..."
        
        # Alternative: Use the PowerShell script approach
        echo ""
        echo "Manual steps:"
        echo "1. Go to Azure Portal"
        echo "2. Navigate to: Static Web Apps → $SWA_NAME"
        echo "3. Go to: Role management (left menu)"
        echo "4. Click: Invite"
        echo "5. Enter: $ADMIN_EMAIL"
        echo "6. Select role: $ROLE"
        echo "7. Generate link and share with user"
        echo ""
    fi
fi

echo ""
echo "============================================"
echo "  Fix Complete!"
echo "============================================"
echo ""
echo "Next steps:"
echo "1. Wait 2-3 minutes for deployment to complete"
echo "2. Check Function App logs for errors"
echo "3. Share the invitation link with your admin user"
echo "4. User MUST click the invitation link to activate their role"
echo ""
echo "Monitor deployment status:"
echo "  az functionapp log tail --name $FUNCTION_APP_NAME --resource-group $RESOURCE_GROUP"
