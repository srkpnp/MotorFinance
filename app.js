// Module dependencies.
var express = require('express');
var routes = require('routes');
var path = require('path');

var app = express();

var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var dbmod = require('./index.js');

// MongoClient
var MongoClient = require('mongodb').MongoClient;
// Database
var db;

// setup mongo connection
MongoClient.connect('mongodb://amirthaganesanr:Ganesh12@firstcluster-shard-00-00-ehib9.mongodb.net:27017,firstcluster-shard-00-01-ehib9.mongodb.net:27017,firstcluster-shard-00-02-ehib9.mongodb.net:27017/test?ssl=true&replicaSet=FirstCluster-shard-0&authSource=admin&retryWrites=true/MotorFinance', function(err, database) {
	if (err) {
		throw err;
	}
	else {
		db = database;
		console.log("Connected to db!");
	}
});

// make our db accessible to our router
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	req.db = db;
	next();
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'uwotm8'
}));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
//app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(errorHandler());
}

// routes
app.get('/', dbmod.homeMFinance);
app.get('/retrieve/:dealerNo/:goodsCode', dbmod.findByName);
app.post('/create', dbmod.createMFinance);
//app.post('/update', routes.updateMFinance);
//app.post('/delete', routes.deleteMFinance);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

