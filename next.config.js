/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  // Only use 'output: export' for production builds
  // For development, we need the standard Next.js server
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: "dist",
  }),
};

module.exports = nextConfig;
