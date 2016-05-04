const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: {
    app: path.resolve(__dirname, "../src/js/index.js")
  },

  output: {
    path: path.resolve(__dirname, "../dist/development"),
    filename: "assets/[name]-[hash].js",
    publicPath: "/"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo Auction",
      template: "../src/index.tmpl"
    }),
    new ExtractTextPlugin("assets/[name]-[hash].css", {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      path: "assets/[name]-[hash].js",
      minChunks: module => module.resource && module.resource.indexOf(path.join(__dirname, "../node_modules")) !== -1
    })
  ],

  /* eslint-disable */
  postcss: [
    require("autoprefixer")
  ],
  /* eslint-enable */

  module: {
    /* preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|src\/vendor\//,
        loader: "eslint"
      }
    ],*/
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css"
        )
      },
      {
        test: /\.scss$/,
        include: path.resolve("../src/sass/local/"),
        /* eslint-disable */
        loader: ExtractTextPlugin.extract(
          "style",
          "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?" +
          "sourceMap&" +
          "includePaths[]=" +
          (path.resolve(__dirname, "../node_modules"))
        )
        /* eslint-enable */
      },
      {
        test: /\.json$/,
        loaders: ["json-loader"]
      }
    ]
  },

  resolve: {
    root: path.resolve("../src/"),
    modulesDirectories: ["node_modules"],
    extensions: ["", ".json", ".js", ".jsx"]
  }
};
