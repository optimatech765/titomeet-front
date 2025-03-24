import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Cette configuration est nécessaire pour Fabric.js avec Next.js
    config.externals.push({
      canvas: 'canvas',
    });
    return config;
  },
};

export default nextConfig;
