const express = require('express');
const router = express.Router();
const publicCtrl = require('../controllers/public');
const Post = require('../models/posts');

router.get('/', publicCtrl.public)

module.exports = router