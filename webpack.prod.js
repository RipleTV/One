const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [],
  module: {
    rules: [
      {
        //  CSS & SCSS
        test: /\.(css|scss|sass)$/i,
        use: [
          'style-loader',
          'css-loader',
          "postcss-loader",
          "sass-loader",
        ],
      }
    ],
  },
});