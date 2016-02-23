var webpack = require('webpack');
var path = require("path");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './dev-tools/main.js'
  ],
  // {
    // input: "./alpha",
    // beta: "./beta"
  // },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: '/static/'
    // filename: "MyLibrary.[name].js",
    // library: ["MyLibrary", "[name]"],
    // libraryTarget: "umd"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
