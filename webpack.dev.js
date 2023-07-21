const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {overlay: true},
    static: common.externals.paths.dist,
    // port: 8081,
    open: true,
    hot: true,
    watchFiles: ['src/**/*']
  },
  module: {
    rules: [
      {
        //  CSS
        test: /\.(css|scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "postcss-loader",
          "sass-loader",
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({}),
  ],
});