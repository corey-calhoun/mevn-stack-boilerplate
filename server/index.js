const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 1776;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, (req, res) => {
    console.info(`Server running on port ${PORT}`)
})