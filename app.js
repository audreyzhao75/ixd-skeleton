
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
// var blankEvent = require("./routes/blankEvent");
// var help = require('./routes/help');
// var event = require("./routes/newEvent");
// var messages = require('./routes/messages');
// var profile = require("./routes/profile");
var search = require('./routes/search');
var results = require('./routes/results');
var blankEvent = require('./routes/blankEvent');
var help = require('./routes/help');
var kellyParty = require('./routes/kellyParty');
var messages = require('./routes/messages');
var newEvent = require('./routes/newEvent');
var profile = require('./routes/profile');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/index', index.view);
// Example route
// app.get('/users', user.list);
app.get('/search', search.view);
app.get('/results', results.view);
app.get('/blankEvent', blankEvent.view);
app.get('/kellyParty', kellyParty.view);
app.get('/messages', messages.view);
app.get('/newEvent', newEvent.view);
app.get('/profile', profile.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
