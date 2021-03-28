const Post = require('../models/posts')


function public(req, res){
 Post.find({status: 'public'}, function(err, post){
    console.log(post);
    res.render('posts/public', {post})
 })}


module.exports = {
    public
}