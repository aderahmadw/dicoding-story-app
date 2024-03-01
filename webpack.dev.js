const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    liveReload: true,
    port: 9000,
  },
});
