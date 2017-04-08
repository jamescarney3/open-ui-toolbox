/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './components/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'components')
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
};
