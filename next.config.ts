import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    //Enable turbo file system caching
    turbopackFileSystemCacheForDev: true
  },
};

export default nextConfig;
