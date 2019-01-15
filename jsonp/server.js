const express = require('express');
// const webpack = require('webpack');
const app = express();
const cors = require('cors')

const baseConfig = {
    port: 3000
}

// CORS middleware
// app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// Serve the files on port 3000.
app.listen(baseConfig.port, function () {
    console.log('Example app listening on port ' + baseConfig.port + '!\n');
});

const getUrl = ['/jsonp']
// listen interfaces
getUrl.forEach(item => {
    app.get(item, (req, res) => {
        let callback = req.query.callback;
        let obj = {
            name: 'manfredhu',
            age: '25'
        };
        const result = Object.assign({} ,obj, {retCode: 0})
        res.writeHead(200, {
            "Content-Type": "text/javascript"
        });
        res.end(callback + '(' + JSON.stringify(result) + ')');
    })
})