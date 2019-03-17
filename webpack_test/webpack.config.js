const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log('aaa')
console.log(__dirname)
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    devServer: {
        contentBase: './bundle'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 打包后也是index.html
            filename: 'index.html'
        })
    ]
};
