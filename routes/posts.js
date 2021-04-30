const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');
const Post = require('../models/posts');

router.get('/add', postCtrl.add)

router.post('/', postCtrl.post)

router.get('/:id', postCtrl.show)

router.get('/:id/edit', postCtrl.edit)
router.put('/:id', postCtrl.update)

router.delete('/:id', postCtrl.delete)






module.exports = router; 