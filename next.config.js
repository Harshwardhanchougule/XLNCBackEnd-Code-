/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    domains: [
      "localhost",
      "your-production-domain.com",
      // "www.xlnctechnologies.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@attached_assets'] = path.join(__dirname, 'attached_assets');
    return config;
  }
};

module.exports = nextConfig;
