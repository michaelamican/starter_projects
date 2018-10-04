var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'jigglypuff',
	resave: true,
	saveUnitialized: true
}));


mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
}, {timestamps: true});

const Quote = mongoose.model('quote', quoteSchema);

app.get('/', function(req, res){
	Quote.find({}, function(err, quotes){
		if (err){
			console.log(err);

		}
		console.log('Finding quotes');	
		console.log(quotes);
		res.render('index', {quotes: quotes});
	});
	
});

app.post('/process', function(req, res){
	Quote.create({name: req.body.name, quote: req.body.quote}, function(err, result){
		if(err){
			console.log(err);
		} else{
			console.log(result);
		}
		res.redirect('/', );
	});
});

app.listen(8000, function(){
	console.log('on port 8000')
})
