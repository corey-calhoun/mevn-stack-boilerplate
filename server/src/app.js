const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MongoClient  = require('mongodb').MongoClient;
const assert = require('assert');

// init app and middlewares
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Set routing for API

app.get('/', (req, res) => {
    // Note: __dirname is current directory 
    res.sendFile(root + './client/src/app.vue')
})


// set port and listen
const PORT = process.env.PORT || 1776;
app.listen(PORT, (req, res) => {
    console.info(`Server running on port ${PORT}`)
});