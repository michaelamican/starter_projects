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
require('./server/models/quote.js');
// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
require('./server/controllers/quotes.js');


mongoose.connect('mongodb://localhost/quoting_dojo');

app.listen(8000, function(){
	console.log('on port 8000')
});
