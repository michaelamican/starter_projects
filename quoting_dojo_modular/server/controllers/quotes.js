const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {

	index: function(req, res){
		Quote.find({}, function(err, quotes){
			if (err){
				console.log(err);
			}
			console.log('Finding quotes');	
			console.log(quotes);
			res.render('index', {quotes: quotes})
		})
	},
	
	process: function(req, res){
		Quote.create({name: req.body.name, quote: req.body.quote}, function(err, result){
			if(err){
				console.log(err);
			} else{
				console.log(result);
			}
			res.redirect('/');
		});
	}


};