const passport = require('passport');
const mongoose = require('mongoose')
const User = require('../Models/user')
const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = function (passport) {
  passport.use(new GoogleStrategy({
      clientID: '203158532668-patpr244rob0a0ne5i8pic2mjfd3hhjt.apps.googleusercontent.com',
      clientSecret:'PrTCcsXFg-ZT5C-IpaDRy0l4',
      callbackURL: '/auth/google/callback'
  },
  async (acesssToken, refreshToken, profile, done)=>{
      const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.picture,
      }
      console.log(profile)
      try{
        let user = await User.findOne({googleId: profile.id})
        if (user){
            done(null, user)
        }else{
            user = await User.create(newUser)
            done(null, user)
        }
      } catch(err){
          console.log(err)
      }
  }))

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}