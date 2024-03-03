const config = require("./webpack.config.js");
const glob = require("glob");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
});
