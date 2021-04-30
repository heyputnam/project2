const Post = require('../Models/posts')

function add(req, res){
    res.render('posts/add')
}

function post(req, res){
    req.body.user = req.session.user._id
    console.log(req.body.user)
    Post.create(req.body)
    res.redirect('/dashboard')
}

function show(req, res){
     Post.findOne({_id: req.params.id}, function(err,post){
        console.log(post)
        res.render('posts/show', {post})
     })
        
    
   
}

function edit(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        res.render('posts/edit', {post})
    })
}


function update(req, res){
    Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err,post){
        res.redirect('/dashboard')
    });
  
}

function deleteit(req, res){
    Post.findByIdAndDelete(req.params.id).exec(function(err, post){});
    res.redirect('/dashboard')
}

module.exports = {
    add,
    post,
    show,
    edit,
    update,
    delete: deleteit
}