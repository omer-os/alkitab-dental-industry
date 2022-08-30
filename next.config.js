/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    base_url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://alkitab-dental-industry.vercel.app",
  },
};

module.exports = nextConfig;
