const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// init app and middlewares
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());


// Set routing for API
const Post = require('../models/post');

app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
        if(error) {consolel.error(error);}
        res.send({
                posts: posts
        })
    }).sort({_id:-1})
});

app.post('/add_post', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title: title,
        description: description
    })

    new_post.save(function (error) {
        if(error) {
            console.log(error)
        }
        res.send({
            success: true
        })
    })
})

// set port and listen
const PORT = process.env.PORT || 1776;
app.listen(PORT, (req, res) => {
    console.info(`Server running on port ${PORT}`)
})