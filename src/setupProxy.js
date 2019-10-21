const proxy = require('http-proxy-middleware')

module.exports = function(app) {

    require('dotenv').config()

    const apiUrl = process.env.PHARM_STORE_BACKEND_URL
    const apiToken = process.env.PHARM_STORE_BACKEND_AUTH_TOKEN
    const headers  = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiToken
    }

    // define http-proxy-middleware
    let DOProxy = proxy({
        target: apiUrl,
        changeOrigin: true,
        pathRewrite: {
            '^/api/' : '/'
        },
        headers: headers,
    })

    // define the route and map the proxy
    app.use('/api', DOProxy)

};
