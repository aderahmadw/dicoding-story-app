const path = require("path");
const fs = require("fs");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    app: path.resolve(__dirname, "src/js/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/views/index.html"),
      ...htmlWebpackPluginConfig,
    }),
  ],
};
