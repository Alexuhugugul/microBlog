const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        init: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ]
    },
    devServer: {
        overlay: true,
        open: true,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    watch: true,
    plugins: [
        // new HtmlWebpackPlugin({ template: './src/pages/main.html', filename: 'pages/main.html' }),
        // new HtmlWebpackPlugin({ template: './src/pages/keys.html', filename: 'pages/keys.html' }),
        // new HtmlWebpackPlugin({ template: './src/pages/month.html', filename: 'pages/month?page=' }),
        // new HtmlWebpackPlugin({ template: './src/pages/collection.html', filename: 'pages/collection?page=' }),
        // new HtmlWebpackPlugin({ template: './src/pages/day.html', filename: 'pages/day?page=' }),
        // new HtmlWebpackPlugin({ template: './src/pages/creatorTask.html', filename: 'pages/creatorTask?page=' }),
        // new HtmlWebpackPlugin({ template: './src/pages/creatorCollection.html', filename: 'pages/creatorCollection?page=' }),
        // new HtmlWebpackPlugin({ template: './src/views/qwe.html', filename: 'pages/creatorCollection?page=' }),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]

}