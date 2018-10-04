var express = require('express');
var app = express();
// var path = require('path');

app.use(express.static(__dirname + "/static"));

app.get('/cars', function(request, response){
	response.render('cars');
})
app.get('/form.html', function(request, response){
	response.render(form.html);
})
app.get('/cats.html', function(request, response){
	response.render(cats.html);
})
app.listen(8000, function(){
	console.log('listening on 8000')
})