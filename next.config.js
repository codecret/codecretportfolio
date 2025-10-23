/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "dist",
};

module.exports = nextConfig;
