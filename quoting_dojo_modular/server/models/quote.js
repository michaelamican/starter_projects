var mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
	quote: {type: String, required: true, minlength: 1},
	name: {type: String, required: true, minlength: 1},
}, {timestamps: true});

	mongoose.model('Quote', quoteSchema);