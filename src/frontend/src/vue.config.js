const webpack = require("webpack");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  transpileDependencies: ["vuetify"],

  configureWebpack: {
    // Set up aliases

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 20,
      }),
    ],
  },
  css: {
    // Enable CSS source maps.

    sourceMap: process.env.NODE_ENV !== "production",
  },
};
