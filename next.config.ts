import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Cette configuration est nécessaire pour Fabric.js avec Next.js
    // config.externals.push({
    //   canvas: 'canvas',
    // });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "titomeet.s3.eu-west-3.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
      
    ],
  },
};

export default nextConfig;
