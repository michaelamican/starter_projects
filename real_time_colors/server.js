var express = require('express');
var app = express();
var path = require('path');
const server = app.listen(8000);
var io = require('socket.io')(server);


app.use(express.static(path.join(__dirname + '/static')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

var color='dimgray';
io.on('connection', function(socket){
	socket.on('join', function(color){
		if(color=='green'){
			console.log('Color selected was green');
			io.emit('color', {colors: 'seagreen'});
			console.log('emitted to page');
		}
		if(color=='blue'){
			console.log('Color selected was blue');
			io.emit('color', {colors: 'dodgerblue'});
		}
		if(color=='pink'){
			console.log('Color selected was pink');
			io.emit('color', {colors: 'lavenderblush'});
		}
		
		
	})
})

app.get('/', function(req, res){

	res.render('index')
})
