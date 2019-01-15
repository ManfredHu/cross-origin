const express = require('express');
// const webpack = require('webpack');
const app = express();

const baseConfig = {
    port: 3001
}

// Serve the files on port 3000.
app.listen(baseConfig.port, function () {
    console.log('Example app listening on port ' + baseConfig.port + '!\n');
});

const getUrl = ['/proxy']
// listen interfaces
getUrl.forEach(item => {
    app.get(item, (req, res) => {
        let obj = {
            name: 'manfredhu',
            age: '25'
        };
        const result = Object.assign({} ,obj, {retCode: 0})
        res.end(JSON.stringify(result))
        console.log('收到请求', req.originalUrl)
        console.log('返回数据', JSON.stringify(result))
    })
})