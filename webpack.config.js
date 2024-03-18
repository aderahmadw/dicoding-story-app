const path = require("path");
const fs = require("fs");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlWebpackPluginConfig = {
  templateParameters: {
    header: fs.readFileSync(
      path.resolve(__dirname, "src/views/templates/header.html"),
      "utf8"
    ),
    footer: fs.readFileSync(
      path.resolve(__dirname, "src/views/templates/footer.html"),
      "utf8"
    ),
  },
};

module.exports = {
  entry: {
    app: "./src/js/index.js",
    // dashboard: path.resolve(__dirname, "src/js/pages/dashboard.js"),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/views/index.html"),
      ...htmlWebpackPluginConfig,
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      filename: "dashboard.html",
      template: path.resolve(__dirname, "./src/views/pages/dashboard.html"),
      ...htmlWebpackPluginConfig,
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: path.resolve(__dirname, "./src/views/pages/about.html"),
      ...htmlWebpackPluginConfig,
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      filename: "explore.html",
      template: path.resolve(__dirname, "./src/views/pages/explore.html"),
      ...htmlWebpackPluginConfig,
      chunks: ["app"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
