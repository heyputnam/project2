const Post = require('../Models/posts')


function public(req, res){
 Post.find({status: 'public'}, function(err, post){
    console.log(post);
    res.render('posts/public', {post})
 })}


module.exports = {
    public
}