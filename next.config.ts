import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove "standalone" output for Vercel deployment
  // Vercel handles the deployment differently and doesn't need standalone mode
  // output: "standalone", // Only needed for Docker/self-hosted
  images: {
    domains: ["cdn.sanity.io"],
  },
  // Ensure environment variables are available during build
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "6i1nvf02",
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  },
};

export default nextConfig;
