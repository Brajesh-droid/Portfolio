
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  images: {
    domains: ["pbs.twimg.com"],
  },
};
export default nextConfig;