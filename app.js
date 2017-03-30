var express = require('express');
var app = express();
var fs = require('fs');
var page1 = fs.readFileSync(__dirname + '/index.html','utf8');
var page2 = fs.readFileSync(__dirname + '/war.html','utf8');
var page3 = fs.readFileSync(__dirname + '/404error.html','utf8');

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send(page1);
});

app.get('/index.html', function(req, res) {
	res.send(page1);
});

app.get('/war.html', function(req, res) {
	res.send(page2);
});



app.get('*', function(req, res) {
	res.send(page3);
});



app.listen(port);