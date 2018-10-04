var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var path = require('path');
var bcrypt = require('bcrypt-as-promised');
const flash = require('express-flash');
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.set('trust proxy', 1);
app.use(session({
    secret: 'jigglemethis',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

mongoose.connect('mongodb://localhost/loginreg', { useNewUrlParser: true });

app.listen(9000, function(){
	console.log('listening on 9000')
})

var UserSchema = new mongoose.Schema({
	firstname: {type: String, required: true, minlength: 2},
	lastname: {type: String, required: true, minlength: 2},
	username: {type: String, required: true, minlength: 8},
	email: {type: String, required: true, minlength: 5},
	password: {type: String, required: true, minlength: 8},
	birthday: {type: Date, required: true},
	login: false,
	},{timestamps: true}
	);
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(req, res){
	console.log('Welcome');
	res.render('index');
});

app.get('/logged', function(req, res){
	res.render('logged');
});

app.post('/check', function(req, res){
	console.log('Searching req.body:', req.body);
	User.findOne({email: req.body.email, password: req.body.password}, function(err, user){
		if(req.body.email == User.email){
			bcypt.compare(req.body.password, User.password).then(hashed_password =>{
				console.log('Correct password')
			})
			.catch(error => {
				console.log('Incorrect');
				for(var key in err.errors){
				req.flash('registration', err.errors[key].message);
			}
			res.redirect('/');
			})
		} else {
			console.log('Found');
			console.log(req.body);
			
			if(login.val() == false){
				login.val() = true;
			}

			req.session.user_id = user._id;
			req.session.username = user.username;
			req.session.firstname = user.firstname;
			req.session.birthday = user.birthday;

			res.redirect('/logged');
		}
	})
});

app.post('/register', function(req, res){
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var username = req.body.username;
	if(req.body.email == req.body.emailver){
		var email = email;
	}
	var hashed_password = bcrypt.hash(req.body.password, 10);
	var hashed_check = bcrypt.hash(req.body.passver, 10);
	bcrypt.compare(hashed_password, hashed_check);
	console.log('Compared');
	if(hashed_password == hashed_check){
				console.log('Correct');
	} else{
			console.log('Incorrect password');
				res.redirect('/')
	}
	
	
	var newuser = new User();
	newuser.username = username;
	newuser.firstname = firstname;
	newuser.lastname = lastname;
	newuser.email = email;
	newuser.password = hashed_password;
	newuser.save(function(err, savedUser){
		if(err){
			console.log(err);
			return res.redirect('/');
		} else{
		 	console.log('Saved!');

		 	login.val() = true;
		 	req.session.user_id = user._id;
		 	req.session.username = user.username;
			req.session.firstname = user.firstname;
			req.session.birthday = user.birthday;

			res.redirect('/logged');
		}
	})
});

