const express = require('express');
const {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    addPost,
    getAddPost,
} = require('../controllers/post-controller')

const router = express.Router();

router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost); 
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.get('/posts', getPosts);
router.get('/add-post', addPost);
router.post('/add-post', getAddPost); 


module.exports = router;