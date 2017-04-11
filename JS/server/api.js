
var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require ('cors'),
	path = require('path'),
	app = express();

var corsOptions = {
	origin: ['http://localhost', 'http://localhost:3000'],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
 
app.use(bodyParser.json());

app.options('*', cors());
 
app.get('/api', cors(corsOptions), function(req, res, next){
	var select_db = require('./select_db');
	
	res.json(select_db.resp);
});

app.get('/auth', cors(corsOptions), function(req, res, next){
	var Login = require('./auth_db');
	var login = new Login();
	var respBody = req.query;
	
	login.get(respBody, function(response) {
		res.json(response);
	});
});

app.put('/insert', cors(corsOptions), function(req, res, next){
	var insert_db = require('./insert_db');
	
	res.json(insert_db(req.body));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});