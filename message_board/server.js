var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'jigglypuff',
	resave: true,
	saveUnitialized: true,
	cookie: { maxage: 60000 }
}));
mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser:true});

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	comt: {type: String, required: true, minlength: 1}},
	{timestamps: true}
	)
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	msg: {type: String, required: true, minlength: 1},
	comments: [CommentSchema]
	}, {timestamps: true});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

app.get('/', function(req, res){
	Message.find({}, function (err, messages) {
        if (err) {
            console.log('something is wrong')
        } else {
       		console.log('Trying')
       	}
		res.render('index', {mes: messages})
	}).sort({_id: -1});
});

app.post('/new', function(req, res){
	var message = new Message({name: req.body.name, msg: req.body.msg});
	message.save(function(err){
		if(err){
			console.log('Error: ', err);
			for(var key in err.errors){
				req.flash('registration', err.errors[key].message);
			}
			res.redirect('/');
		} else{
			console.log('Message saved');
			console.log(req.body);
			res.redirect('/');
		}
	})
});

app.post('/comment', function(req, res){
	var comment = new Comment({name: req.body.name, comt: req.body.comt});
	comment.save(function(err){
		if(err){
			console.log('Error: ', err);
			for(var key in err.errors){
				req.flash('registration', err.errors[key].message);
			}
			res.redirect('/');
		} else{
			Message.findOneAndUpdate({_id: req.body.hide}, {$push: {comments: comment}}, function(err, data){
				console.log(req.body.hide);
				console.log('Pushing', data._id);
				if(err){
					console.log('Update unavailable');
				}
				else{
					console.log('Updating...');
				}
				console.log('Comment added.');
				console.log(req.body);
				res.redirect('/');
			})
		}
	});
});
	
app.listen(8000, function(){
	console.log('listening on 8000')
});



