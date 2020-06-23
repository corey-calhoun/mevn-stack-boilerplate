const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// change this to whatever you need
// remember if renaming variable to change throught doc
const PostSchema = new Schema({
    title: String,
    description: String
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;