import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.freeimages.com",
      },
    ],
  },
};

export default nextConfig;
