var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname + '/static')));
app.set('views',path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/cars', function(request, response){

	response.render('cars')
})
app.get('/cars/new', function(request, response){
	response.render('form')
})
app.get('/cats', function(request, response){
	response.render('cats')
})
app.listen(8000, function(){
	console.log('listening on 8000')
})