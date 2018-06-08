const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-models');


passport.serializeUser((user, done) =>{
   done(null, user.id);  // user is not error, so null
});

passport.deserializeUser((user, done)=>{
User.findById(id).then((user)=> {
    
    done(null, user);
})
   
})



passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check whether user exist in db or not
        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser) {
                console.log('user is: ', currentUser);

                done(null, currentUser);

            } else {
                // create a user

                // passport callback function
            console.log('passport callback function fired');
            console.log(profile);

            new User ({
                username: profile.displayName, 
                googleId: profile.id, 
            }).save().then((newUser)=>{
                console.log('new user created: '+newUser)

                done(null, newUser);
            }) //save is promise (save to DATABASE), after finish, will run then

            }
        })




        

    })
);