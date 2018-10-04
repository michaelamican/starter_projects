const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
var path = require('path');
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');



const server = app.listen(8000);
const io = require('socket.io')(server);

app.get('/', function(req, res){
	res.render('index');
})
io.on('connection', function(socket){
	socket.on('posting_form', function(info){
		console.log('server recd posting_form');
		console.log(info);
		var number = Math.floor((Math.random() * 1000) + 1);
		console.log('Number generated:');
		console.log(number);
		console.log('*'*50);
		io.emit('updated_message', {number: number, info: info})
		console.log('emitted data to page');
	})
})