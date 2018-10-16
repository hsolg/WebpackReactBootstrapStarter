const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')

const port = process.env.PORT_NUMBER || 3030
const jwtSecret = process.env.JWT_SECRET || "default_secret"
const apiServerUrl = process.env.API_SERVER_URL

const jwtProps = {
    secret: jwtSecret,
    getToken: (req) => {
        return req.cookies.jwt
    }
}

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
        before: function(app) {
            app.use(cookieParser())
            app.get('/', jwt(jwtProps), (err, req, res, next) => {
                if (err.name === 'UnauthorizedError') {
                    res.redirect('/login')
                } else {
                    next()
                }
            })
            app.get('/app.bundle.js', jwt(jwtProps), (err, req, res, next) => {
                if (err.name === 'UnauthorizedError') {
                    res.status(401).send()
                }
                next()
            })
            app.get('/apiServerUrl', function(req, res) {
                res.json({url: apiServerUrl})
            })
        },
        compress: true,
        port: port
    }
})
