const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
};

module.exports = withContentlayer(nextConfig, {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["babel-loader", "@svgr/webpack"],
    });

    return config;
  },
});
