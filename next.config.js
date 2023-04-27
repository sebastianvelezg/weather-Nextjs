/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
