/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  title: 'Open UI Toolbox',
  files: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'],
  babelConfig: {
    presets: ['es2015', 'react'],
    plugins: ['add-module-exports', 'transform-class-properties'],
  },
  webpackConfig: {
    module: {
      loaders: [{
        test: /\styleguide.jsx?$/,
        loader: 'babel-loader',
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', 'css', 'scss']
    }
  }
};
