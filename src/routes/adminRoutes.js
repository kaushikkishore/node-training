var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;





var books = [
        {
            title: 'First 1',
            author: 'Kaushik',
            genre:'love story',
            bookId:656,
            read:false
        },
        {
            title: 'Second',
            author: 'Garima',
            genre:'love story',
            bookId:24280,
            read:false
        },
        {
            title: 'Third',
            author: 'Rahul',
            genre:'love story',
            bookId:656,
            read:false
        },
        {
            title: 'Fourth',
            author: 'Neeraj',
            genre:'love story',
            bookId:24280,
            read:false
        },
        {
            title: 'Fifth',
            author: 'Shainki',
            genre:'love story',
            bookId:656,
            read:false
        },
        {
            title: 'Sixth',
            author: 'Abhinav',
            genre:'love story',
            read:false
        },
        {
            title: 'Seventh',
            author: 'Kaushik',
            genre:'love story',
            read:false
        }, {
            title: 'Eighth',
            author: 'Ramesh',
            genre:'love story',
            read:false
        }
    ];
   

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function(req,res){
        	// All opening and closing will be done here for the mongo db 
        	var url = 'mongodb://localhost:27017/libraryApp';

        	// Connecto to mongo db 
        	mongodb.connect(url, function(err, db){
        		// Mongodb Operations.
        		var collection = db.collection('books');


        		// Adding books will resutn all books with mongo details.
        		collection.insertMany(books, function(err, results){
        				res.send(results);

        				db.close();
        		});
        	});

            // res.send('Inserting Books');
        });


    return adminRouter;
}

module.exports = router;