// const Student = require('../models/postModel');
const Post = require('../models/postModel');

const   getPosts = async (req, res) => {
  
    try {
      const result =  await Post.find()
      res.json(result)

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const   getPostById = async (req, res) => {
    const postId = req.params.postId.trim()
    try {
        
      const result =  await Post.findById(postId)
      console.log('result', result)
      res.json(result)

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createPost = async (req, res) => {
    console.log('sadsad', req.body.blogTitle)
    try {
    const std = new Post({
        blogHTML: req.body.blogHTML,
        blogCoverPhoto: req.body.blogCoverPhoto,
        blogTitle: req.body.blogTitle,
        profileId: 1,
        date: new Date(),
        });

        console.log('gg', {
            blogHTML: req.body.blogHTML,
            blogCoverPhoto: req.body.blogCoverPhoto,
            blogTitle: req.body.blogTitle,
            profileId: 1,
            date: new Date(),
            })
      const result =  await std.save()
      res.json(result)

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// create   
//

// const std = new Student({
//     name: 'John',
//     age: 20,
//     favoriteFood: 'Pizza'
// });
// const xx = await std.save()
// console.log(xx);
// res.send('Hello World');


module.exports = {
    getPosts,
    createPost,
    getPostById
}