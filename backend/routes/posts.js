const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');

const auth = require('../middleware/auth');
const postsCtrl = require('../controllers/posts');

// créer des router avec les fonctionnalités utilisées dans l'API

router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.post('/', auth, postsCtrl.createPost);
router.put('/:id', auth, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);



module.exports = router;