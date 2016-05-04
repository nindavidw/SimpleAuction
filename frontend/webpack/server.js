const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,

  watch: true,
  inline: true,
  sourceMap: true,
  stats: {
    colors: true
  },

  proxy: [{
    path: /api(.*)/,
    target: "http://localhost:3000",
    rewrite: req => req.url.substring(4)
  }]
}).listen(3200, "0.0.0.0", err => {
  // eslint-disable
  if (err) {
    console.log(err);
  }

  console.log("Listening at 0.0.0.0:3200");
  // eslint-enable
});
