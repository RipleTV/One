const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
}

module.exports = {
  entry: {
    index: `${PATHS.src}/index.js`, 
    // another: './src/another.js', // nth entry point
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
    assetModuleFilename: `${PATHS.assets}images/[hash][ext][query]`,
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    paths: PATHS
  },
  module: {
    rules: [
      {
        //  Java Script
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        //  Images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // Elements
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/elements.html`,
      filename: 'index.html',
    }),
  ],
};