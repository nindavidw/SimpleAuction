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
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  })
]);

module.exports = config;
