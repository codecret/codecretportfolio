/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  // Next.js server build (builds to .next folder)
  // Use 'npm run build' then 'npm start'
};

module.exports = nextConfig;
