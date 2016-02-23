var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: {
    input: "./src/input"
  },
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: '/static/',
    filename: "[name].js",
    library: ["GCDComponents", "[name]"],
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
