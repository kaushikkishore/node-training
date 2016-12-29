// Get the express module
var express = require('express');

// This will be used for parsing the form data in from of JSON 
var bodyParser = require('body-parser');

/**
 * this cookieParser, passport, expressSession will be used ofr authentication and authorization
 */

// cookie parser will be used for parsing cookie data 
var cookieParser = require('cookie-parser');

// Passport
var passport = require('passport');

// express session 
var session = require('express-session');

// Instanciating express module for further usage.

var app = express();



var port = process.env.PORT || 5000;

var nav = [
    { Link: '/Books', Text: 'Books' },
    { Link: "/Authors", Text: 'Authors' }
];

// Creating routes 
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);
var apiRouter = require('./src/routes/apiRoutes')(nav);

// Setup public directory which express will look first
app.use(express.static('public'));

// Use body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// this means currently index is static file. 
// app.use(express.static('src/views'));
app.set('views', './src/views');






/**
 * Now We'll do authentication related things here
 */
app.use(cookieParser());
app.use(session({secret:'library'})); // session takes a secret that can be anything.

require('./src/config/passport')(app);

/* This is secific to handlebars */
// var handlebars = require('express-handlebars')
// app.engine('.hbs', handlebars({extname:'.hbs'}));

app.set('view engine', 'ejs');
app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);
app.use('/Api', apiRouter);

// Here we can define all the routes for the bookrouter 
// Getting request from browser. 
app.get('/', function (req, res) {
    res.render('index', {
        title: 'This is title from render engine',
        nav: [
            { Link: '/Books', Text: 'Books' },
            { Link: "/Authors", Text: 'Authors' }
        ]
    });
});
/*
app.get('/books', function (req, res) {
    res.send('Hello Books!');
});
*/
app.listen(port, function (err) {
    console.log('Your application is running on: ' + port);
});