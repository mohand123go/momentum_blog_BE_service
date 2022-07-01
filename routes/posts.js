const express = require('express');
const router = express.Router();

const {getPosts, createPost, getPostById} = require('../controllers/postControllers');
// const {createPost} = require('../controllers/postControllers');

router.get('/', getPosts )
router.post('/createPost', createPost )
router.get('/:postId', getPostById )



module.exports = router;