const mongoose = require('mongoose'),
Quote = mongoose.model('Quote');	

const quotes = require('./../controllers/quotes.js');

module.exports = function(app){
	
	app.get('/', function(req, res){
		quotes.index(req, res);
	})

	app.post('/process', function(req, res){
		quotes.process(req, res);
	});
}