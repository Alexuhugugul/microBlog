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
        new HtmlWebpackPlugin({ template: './src/view/main.html', filename: 'view/main.html' }),
        new HtmlWebpackPlugin({ template: './src/view/key.html', filename: 'view/key.html' }),
        new HtmlWebpackPlugin({ template: './src/view/month.html', filename: 'view/month?page=' }),
        new HtmlWebpackPlugin({ template: './src/view/collection.html', filename: 'view/collection?page=' }),
        new HtmlWebpackPlugin({ template: './src/view/day.html', filename: 'view/day?page=' }),
        new HtmlWebpackPlugin({ template: './src/view/creatorTask.html', filename: 'view/creatorTask?page=' }),
        new HtmlWebpackPlugin({ template: './src/view//creatorCollection.html', filename: 'view/creatorCollection?page=' }),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]

}