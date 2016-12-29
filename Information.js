/* 
to get json file. 
npm init 

npm install express --save

save will save locally otherwise this is fine. 


to start with default app. in pakage.json add under script object 
start: 'node app.js'

this will help you to start node automatically 

now we can type "npm start" and this will start our application. 

// Simple routing


// Bower 
npm install bower -g 
 -g means install globally 
 
 
 // intialization of bower.json
 
 bower inti


// install bootstrap 
bower install --save bootstrap


// Create a file .bowerrc
this is the file where bower is gonna look for dependency 

Check this if any problem related to git. 
http://stackoverflow.com/questions/20666989/bower-enogit-git-is-not-installed-or-not-in-the-path

check if any problem in bower name case 
http://stackoverflow.com/questions/36512419/bower-update-return-me-invalid-meta-the-name-is-recommended-to-be-lowercase-c

Here are things 
Git should be installed 
environment variable should be set
and bower json name should be all small case. 

install font awesome 
bower install font-awesome --save


*/



/*
Setup gulp

Task manager for web projects
JS Hint 
manage code error and vulnarable codes 


JSCS
coding standard 

installl globally 

npm install -g gulp

for dev env
npm install gulp --save-dev



install these packages for styling 

npm install --save-dev gulp-jshint gulp-jscs jshint-stylish
npm uninstall --save-dev gulp-jshint gulp-jscs jshint-stylish

To check style 
gulp style


*/

/*
npm install wiredep --save-dev

in html file add these comments 
<!-- bower:css -->
<!-- endbower -->


<!-- bower:js -->
<!-- endbower -->


for managing our own files css/js
npm install gulp-inject --save-dev

<!-- inject:css -->
<!-- endinject -->

<!-- inject:js -->
<!-- endinject -->


nodemon - used for development
used for restrarting the server automatically

npm install gulp-nodemon --save-dev

this command is used for inhect css and js in new file. 
change the *.html/*.jade 
and add comment for injecting place and enjoy 
gulp inject 
*/


/*

install jade 
change in sapp.js
// app.use(express.static('src/views'));
app.set('views','./src/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {list: ['a','b']});
});


to inject css and js 
use this type of comment in jade. 

//- inject:js
//- endinject

*/

/*
install handle bars 
npm install --save express-handlebars
.hbs - is the extension that will be used for handle bars 

add handlebar refeence
var handlebars = require('express-handlebars')
app.engine('.hbs',handlebars({extname:'.hbs'}));

set view engine as .bhs


in view {{}} handle bar uses double curly bracket for variables that is recieved from server 

*/

/*
EJS

npm install --save ejs

remove handle bar code 

change view engine ejs


<%= %>
is used for variable accessing

<% %>
for loops and conditions. 
*/

/* Routes
VS CODE - Shift + Alt + F - to format the code. 



*/


/************************************************************** */

/* MSSQL -  */
/**
 * npm install --save mssql
 */

/**
 * Download Mongo DB
 * Setup environment variable
 * cmd type - mongod 
 * this will start mongo db server 
 * if it says directory data/db not found. then create a directory in same drive. 
 * then open anothe cmd type mongo
 * to show all databases 
 * type - show dbs
 * 
 * GOTO NPMJS.COM
 * search mongodb - download it. -- no need
 * npm install mongodb 
 * 
 */
/*
to see mongo db 

mongo libraryApp

show collections

db.books.find()

this will empty the database.
db.books.remove({});

finedOne will find only one record 




/************************************************************** */
/*
Authentication and Authorization 

npm install --save body-parser


<%= %> will escape the html 

<%- %> show as html
*/

/*

GIT Commands 

git status 

git commit -m "message"

git add --all 
this will add all 

git push origin master 

this will push 


*/


