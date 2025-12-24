const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  turbopack: {},  // Add this line
};

module.exports = withContentlayer(nextConfig);
