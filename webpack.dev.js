const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
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
