import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  /* config options here */
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
   images: {
    unoptimized: true,   // ✅ disables optimization
  },
};

export default nextConfig;
