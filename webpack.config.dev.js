const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
});
