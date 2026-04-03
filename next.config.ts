import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/company', destination: '/about', permanent: true },
      { source: '/investor', destination: '/investors', permanent: true },
    ];
  },
};

export default nextConfig;
