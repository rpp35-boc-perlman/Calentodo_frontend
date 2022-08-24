const express = require('express');

const app = express();

app.use(express.static('client/dist'));

// test router - only active during testing
app.get('/status', (req,res,next) => {
    res.status(200).send('up')
});

// routes


module.exports = app