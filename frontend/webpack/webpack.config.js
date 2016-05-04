const webpack = require("webpack");
const config = require("./webpack.config.base.js");

config.entry = [
  "webpack-dev-server/client?http://localhost:3200",
  "webpack/hot/only-dev-server",
  "../src/js/index.js"
];

config.output.publicPath = "http://localhost:3200/";

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.DEBUG ? "development" : "production")
    }
  })
]);

module.exports = config;
