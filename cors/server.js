const express = require('express');
// const webpack = require('webpack');
const app = express();
const cors = require('cors')

const baseConfig = {
    port: 3000
}

// CORS middleware
// it can cross origin if open one.
// app.use(cors({credentials: true, origin: 'http://localhost:9000'}))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve the files on port 3000.
app.listen(baseConfig.port, function () {
    console.log('Example app listening on port ' + baseConfig.port + '!\n');
});

const getUrl = ['/cors']
// listen interfaces
getUrl.forEach(item => {
    app.get(item, (req, res) => {
        let obj = {
            name: 'manfredhu',
            age: '25'
        };
        // res.writeHead(200, {
        //     "Content-Type": "text/javascript"
        // });
        const result = Object.assign({} ,obj, {retCode: 0})
        console.log(result);
        res.end(JSON.stringify(result))
    })
})