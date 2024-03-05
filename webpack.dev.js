const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    liveReload: true,
    port: 9000,
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: "text/html" },
      publicPath: "/publicPathForDevServe",
      serverSideRender: true,
      writeToDisk: true,
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: "/index.html" },
        { from: /^\/dashboard/, to: "/dashboard.html" },
      ],
    },
  },
  plugins: [],
});
