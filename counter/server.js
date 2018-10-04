var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(path.join(__dirname + '/static')));
app.set('views',path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(session({
	secret:'counter',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000 }
}))

app.get('/', function(req, res){
	if(!req.session.count){
		req.session.count = 0;
	}
	var n = req.session.count;
	console.log(n);
	req.session.count += 1;
	res.render('index', {count: n})
})
app.get('/double', function(req, res){
	if(!req.session.count){
		req.session.count = 0;
	}
	var n = req.session.count;
	console.log(n);
	req.session.count += 2;
	res.render('index', {count: n})
})
app.get('/reset', function(req, res){
	if(!req.session.count){
		req.session.count = 0;
	}
	var n = req.session.count;
	console.log(n);
	req.session.count = 0;
	res.render('index', {count: n})
})


app.listen(8000, function(){
	console.log('listening on 8000')
});

