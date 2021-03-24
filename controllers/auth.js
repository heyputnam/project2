function logout(res, req){
    req.logout();
    res.redirect('/')
}

module.exports = {
    logout
}