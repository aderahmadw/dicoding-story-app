const path = require("path");
const glob = require("glob");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
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
