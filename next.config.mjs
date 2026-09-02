/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === "true" ? "/Personal-Website" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/Personal-Website/" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
