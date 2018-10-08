const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        login: './src/login.js',
        app: './src/app.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "html/*.html"
            },
            {
                from: "assets/png/*.png"
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
