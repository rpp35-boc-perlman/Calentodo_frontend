const express = require('express');
const path = require('path')
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'));

const distDir = path.join(__dirname, '../client/dist')

app.use( express.static(distDir) );


// test router - only active during testing
app.get('/status', (req,res,next) => {
    res.status(200).send('up')
});

// routes


module.exports = app