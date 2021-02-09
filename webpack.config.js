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
        new HtmlWebpackPlugin({ template: './src/pages/main.html', filename: 'pages/main.html' }),
        new HtmlWebpackPlugin({ template: './src/pages/keys.html', filename: 'pages/keys.html' }),
        new HtmlWebpackPlugin({ template: './src/pages/month.html', filename: 'pages/month?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/collection.html', filename: 'pages/collection?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/day.html', filename: 'pages/day?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/creatorTask.html', filename: 'pages/creatorTask?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/creatorCollection.html', filename: 'pages/creatorCollection?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/creatorNewMonth.html', filename: 'pages/creatorNewMonth.html' }),
        new HtmlWebpackPlugin({ template: './src/pages/tasksMonth.html', filename: 'pages/tasksMonth?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/creatorNewTaskForMonth.html', filename: 'pages/creatorNewTaskForMonth?page=' }),
        new HtmlWebpackPlugin({ template: './src/pages/planFuture.html', filename: 'pages/planFuture.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]

}