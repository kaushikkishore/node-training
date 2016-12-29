var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient;



module.exports = function () {
    // defined what you call your username and password field in your html page. 
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, function (username, password, done) {


        var url = 'mongodb://localhost:27017/libraryApp';

        	// Connecto to mongo db 
        	mongodb.connect(url, function(err, db){
        		// Mongodb Operations.
        		var collection = db.collection('users');

                collection.findOne({username:username}, function(err, results){
                    if(results.password === password){
                        var user = results;
                        done(null, results);
                    }else{
                        done(null, false, {message:'bad password'});
                    }
                });

            });

    }
    ));
};
