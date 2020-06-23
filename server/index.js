const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// init app and middlewares
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

// set port and listen
const PORT = process.env.PORT || 1776;
app.listen(PORT, (req, res) => {
    console.info(`Server running on port ${PORT}`)
})