# Vercel Deployment Setup

## Environment Variables Required

To successfully deploy this application on Vercel, you **must** configure the following environment variables in your Vercel project settings:

### Steps to Add Environment Variables in Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Click on "Settings"
4. Navigate to "Environment Variables"
5. Add the following variables:

| Variable Name | Value | Environments |
|--------------|-------|--------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `6i1nvf02` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production, Preview, Development |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` | Production, Preview, Development |

### Important Notes:

- **All three environments must have these variables set** (Production, Preview, and Development)
- The `NEXT_PUBLIC_` prefix is required for these variables to be available during build time
- After adding the variables, you need to **redeploy** your application for the changes to take effect

### Troubleshooting:

If you see an error like "Cannot destructure property 'auth' of 'a' as it is null" during deployment:

1. Verify all environment variables are set correctly in Vercel
2. Ensure they are set for all environments (Production, Preview, Development)
3. Trigger a new deployment after setting the variables
4. Check the Vercel build logs to confirm the variables are being loaded

### Current Configuration:

The application has fallback values hardcoded:
- Project ID: `6i1nvf02`
- Dataset: `production`
- API Version: `2024-01-01`

However, **it's still recommended to set these in Vercel explicitly** to avoid any potential issues with the Sanity client initialization.

