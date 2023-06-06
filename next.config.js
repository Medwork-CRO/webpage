/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/medwork.gr/" : "",
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};

module.exports = nextConfig;
