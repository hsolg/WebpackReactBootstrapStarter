const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        historyApiFallback: {
            index: 'html/app.html',
            rewrites: [
                { from: /^\/login$/, to: 'html/login.html'}
            ]
        },
        compress: true,
        port: 3000
    }
})
