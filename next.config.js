/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/snp-yourtour-next",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
