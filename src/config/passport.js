var passport = require('passport');


module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

// searialization of user will be done here . 
    passport.serializeUser(function (user, done){
        done(null, user); // here we are not doing error handling so err first param is null
    });

// deserialize user object and then do the user authentication
    passport.deserializeUser(function (user, done){
        done(null, user); // here we are not doing error handling so err first param is null
    });

// Local db verification. do it inseparate file. 
require('./strategies/local.strategy')();

};