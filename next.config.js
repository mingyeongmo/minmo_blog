const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
};

const contentlayerConfig = withContentlayer(nextConfig);

module.exports = {
  ...contentlayerConfig,
  images: {
    // loader: "imgix",
    // path: "minmo.vercel.app",
    domains: ["blog.kakaocdn.net"],
  },
};
