const mongoose = require('mongoose');

const sutdenSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFood: String
});

const postSchema = new mongoose.Schema({
    blogHTML: String,
    blogCoverPhoto: String,
    blogTitle: String,
  profileId: String,
  date: Date
});



const Student = mongoose.model('Student', sutdenSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;