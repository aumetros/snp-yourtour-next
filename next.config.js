/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "" : undefined,
  images: {
    unoptimized: true,
    path: "/images/",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
