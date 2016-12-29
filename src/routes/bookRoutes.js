var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;


/* 


bookRouter.route('/Books')
    .get()
    .post();
*/




var router = function (nav) {
    var bookService = require('../services/goodreadsServices')();
    var bookController = require('../controllers/bookController')(bookService, nav); // null for book service 

    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    // Must be returned 
    return bookRouter;
};



module.exports = router;