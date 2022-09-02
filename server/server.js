const express = require('express');
const path = require('path')
const morgan = require('morgan')
const proxy = require('express-http-proxy');
const url = require('url');

const app = express();

app.use(express.json())
app.use(morgan('tiny'));

const distDir = path.join(__dirname, '../client/dist')

app.use( express.static(distDir) );

// test router - only active during testing
app.get('/status', (req,res,next) => {
    res.status(200).send('up')
});

const proxyUrl = 'http://userservice-env.eba-fa8rm3ph.us-east-2.elasticbeanstalk.com/api'
// routes
// user service proxy
const apiProxy = proxy(proxyUrl, {
    proxyReqPathResolver: req => url.parse(req.baseUrl).path
});

app.use('/api/*', apiProxy);

module.exports = app