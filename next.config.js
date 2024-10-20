/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during the build process
  },
  images: {
    domains: ["pbs.twimg.com"], // Allows images from this domain
  },
};

module.exports = nextConfig;
