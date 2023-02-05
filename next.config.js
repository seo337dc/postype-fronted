/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY,
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
