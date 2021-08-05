require("dotenv").config();
const path = require("path");

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    loader: "imgix",
    path: "",
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
