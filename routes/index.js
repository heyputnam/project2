const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const Post = require('../models/posts');



// login/landing page

router.get('/', indexCtrl.login);
router.get('/dashboard', async function(req, res){
    const posts = await Post.find({user: req.session.passport.user})
    console.log(posts)
    console.log(req.session.user.firstName)
    res.render('dashboard', {name: req.session.user.firstName})
});




module.exports = router; 