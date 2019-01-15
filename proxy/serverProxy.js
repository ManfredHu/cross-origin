const express = require('express');
const app = express();
const proxy = require("http-proxy-middleware");
const baseConfig = {
    port: 3000
}

app.use(
    "/",
    proxy({
        // 代理跨域目标接口
        target: "http://localhost:3001",
        changeOrigin: true,
        // 修改响应头信息，实现跨域并允许带 cookie
        onProxyRes: function(proxyRes, req, res) {
            res.header("Access-Control-Allow-Origin", "http://localhost:9000");
            res.header("Access-Control-Allow-Credentials", "true");
        },

        // 修改响应信息中的 cookie 域名
        cookieDomainRewrite: "localhost" // 可以为 false，表示不修改
    })
);


// Serve the files on port 3000.
app.listen(baseConfig.port, function () {
    console.log('Example app listening on port ' + baseConfig.port + '!\n');
});