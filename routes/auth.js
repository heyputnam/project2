const express = require('express')
const passport = require('passport')
const router = express.Router()
const  authCtrl = require('../controllers/auth')
// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), function(req, res){
      res.redirect('/dashboard');
  })

  //logout user
  // /auth/logout

  router.get('/', authCtrl.logout)


module.exports = router