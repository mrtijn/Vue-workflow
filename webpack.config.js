var path = require('path');
var webpack = require('webpack');
var basePath = path.join(__dirname);
module.exports = {
  entry: basePath + '/app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'assets/js'),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
