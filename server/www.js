const express = require('express')
const config = require('dotenv').config;

// make env variables availible
config();

// take env port or default to 3000
const port = process.env.PORT || 3000;

const app = require('./server');

// only start the server when not testing
if(process.env.NODE_ENV !== 'test'){

    app.listen(port, () => {
        console.log(`CalenTodo 🥳 listening on port ${port}`);
    });

}