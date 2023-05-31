const path = require('path') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 

    module.exports = {
        entry: {
            app: './src/index.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist'
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }, {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true}
                    },       
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            }]
        },
        devServer: {
            client: {overlay: true},
            static: {directory: path.join(__dirname)}
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css" 
            })
        ],
    }