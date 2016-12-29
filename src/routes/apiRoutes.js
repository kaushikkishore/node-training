var express = require('express');
var apiRouter = express.Router();
var http = require('http');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');



var router = function(nav){

    apiRouter.route('/')
            .get(function(req, res){
                // Get all details 
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ProspectId:uuid.v4(), FirstName:"Kaushik", LastName:"Kishore"}));
            });

    apiRouter.route('/:id')
            .get(function(req, res){
                // Get One Item 
                var id = req.params.id;
                var test = req.params.test;
                res.json({ProspectId:uuid.v1(), FirstName:"Kaushik", LastName:"Kishore", ID : id, DummyId: test});
            });

    apiRouter.route('/')
            .post(function(req, res, next){
                // Retrieve The details 
                res.json(req.body)

            });

    return apiRouter;

};


module.exports = router;

/**
 * function isNullOrWhitespace( input ) {

    if (typeof input === 'undefined' || input == null) return true;

    return input.replace(/\s/g, '').length < 1;
}

 */