/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/medwork.gr/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
