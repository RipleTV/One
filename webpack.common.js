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
    // Home page (index.html)
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/index.html`,
      filename: 'home.html',
    }),
    // Search page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/search.html`,
      filename: 'search.html',
    }),
    // Anime page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/anime.html`,
      filename: 'anime.html',
    }),
    // Profile page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/profile.html`,
      filename: 'profile.html',
    }),
    // Login page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/login.html`,
      filename: 'login.html',
    }),
    // Register page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/register.html`,
      filename: 'register.html',
    }),
    // Forgot password page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/forgot_password.html`,
      filename: 'forgot_password.html',
    }),
    // Change email page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/change_email.html`,
      filename: 'change_email.html',
    }),
    // Change password page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/change_password.html`,
      filename: 'change_password.html',
    }),
    // Email confirm page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/email_confirm.html`,
      filename: 'email_confirm.html',
    }),    
    // Email confirmed page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/email_confirmed.html`,
      filename: 'email_confirmed.html',
    }),
  ],
};