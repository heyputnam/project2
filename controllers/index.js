const { session } = require("passport");
const Post = require('../Models/posts')



function login(req,res){
    res.render('login');
}

// function dashboard(req,res){
//    res.render('dashboard', {});
// }
    

module.exports = {
    login,
    // dashboard
    
};