var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// var bootstrap = require('bootstrap');
// var jQuery = require('jquery');

app.use(express.static(path.join(__dirname + '/static')));
app.set('views',path.join(__dirname + '/views'));
app.set('view engine','ejs');

app.get('/cats', function(request, response){
	response.render('cats')
})
app.get('/monster', function(request, response){
	var cats_array=[
		{name: 'Monster', breed: 'Caracal', age:'6 months', hobbies:'Indiscriminate scratching.', image:'/images/caracal.jpg'},
		// {name:'Beastie', breed: 'Serval', age: '2 years', hobbies:'Bird-watching', image:'/images/serval.jpg'},
		// {name:'Killer', breed:'Scottish Fold', age:'Primeval', hobbies:'Summoning eldritch beings for devious purposes.', image:'/images/scotty.jpg'}
	];
	response.render('details', {cats: cats_array})
})
app.get('/beastie', function(request, response){
	var cats_array=[
		// {name: 'Monster', breed: 'Caracal', age:'6 months', hobbies:'Indiscriminate scratching.', image:'/images/caracal.jpg'},
		{name:'Beastie', breed: 'Serval', age: '2 years', hobbies:'Bird-watching', image:'/images/serval.jpg'},
		// {name:'Killer', breed:'Scottish Fold', age:'Primeval', hobbies:'Summoning eldritch beings for devious purposes.', image:'/images/scotty.jpg'}
	];
	response.render('details', {cats: cats_array})
})
app.get('/killer', function(request, response){
	var cats_array=[
		// {name: 'Monster', breed: 'Caracal', age:'6 months', hobbies:'Indiscriminate scratching.', image:'/images/caracal.jpg'},
		// {name:'Beastie', breed: 'Serval', age: '2 years', hobbies:'Bird-watching', image:'/images/serval.jpg'},
		{name:'Killer', breed:'Scottish Fold', age:'Primeval', hobbies:'Summoning eldritch beings for devious purposes.', image:'/images/scotty.jpg'}
	];
	response.render('details', {cats: cats_array})
})

app.listen(8000, function(){
	console.log('listening on 8000')
})