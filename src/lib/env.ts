// Environment configuration with fallbacks for development
export const env = {
  SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'development',
  SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN || '',
  
  // Development mode check
  isDevelopment: process.env.NODE_ENV === 'development',
  
  // Sanity configuration
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'development',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
  }
}
