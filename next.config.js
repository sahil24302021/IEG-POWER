/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },

  async redirects() {
    return [
      { source: '/company',  destination: '/about',     permanent: true },
      { source: '/investor', destination: '/investors', permanent: true },
    ];
  },
};

module.exports = nextConfig;
