var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;

var bookController = function (bookService, nav) {

    var middleware = function (req, res, next) {
        /*
        if(!req.user){
            res.redirect('/');
        }
        */
        next();
    };

    var getIndex = function (req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';

        // Connecto to mongo db 
        mongodb.connect(url, function (err, db) {
            // Mongodb Operations.
            var collection = db.collection('books');


            // Currently we are not finding anything so the object is passed as empty array. 
            // After that we are converting it to an array. 

            collection.find({}).toArray(function (err, results) {
                res.render('booksListView', {
                    title: 'Books',
                    nav: nav,
                    books: results
                });
            });

        });
    };

    var getById = function (req, res) {
        var id = new objectId(req.params.id);
        var url = 'mongodb://localhost:27017/libraryApp';
        // Connecto to mongo db 
        mongodb.connect(url, function (err, db) {
            // Mongodb Operations.
            var collection = db.collection('books');


            // Currently we are not finding anything so the object is passed as empty array. 
            // After that we are converting it to an array. 

            collection.findOne({ _id: id }, function (err, results) {

                if (results.bookId) {
                    bookService.getBookById(results.bookId, function (err, book) {

                        results.book = book;
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });
                    });
                } else {
                    res.render('bookView', {
                        title: 'Books',
                        nav: nav,
                        book: results
                    });
                }

            });

        });
    };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;