import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      // Redirect old URLs to home page
      {
        source: "/blogs/:path*",
        destination: "/customer-stories",
        permanent: true,
      },
      {
        source: "/budget-management",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/",
        permanent: true,
      },
      {
        source: "/asset-management",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cost-explorer\\+\\+",
        destination: "/",
        permanent: true,
      },
      {
        source: "/instance-scheduler",
        destination: "/",
        permanent: true,
      },
      // Redirect old route names to new standardized routes
      {
        source: "/about-us",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/tnc",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/case-studies/:path*",
        destination: "/customer-stories",
        permanent: true,
      },
      {
        source: "/join-waitlist",
        destination: "/",
        permanent: true,
      },
      {
        source: "/csi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
