var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	if (request.url === '/'){
		fs.readFile('index.html', 'utf8', function(errors, contents){
			if(errors){
				console.log(errors);
			} else {
				response.writeHead(200, {'Content-Type' :  'text/html'});
				response.write(contents);
				response.end();
			}
		});
	} else if (request.url === '/ninjas'){
		fs.readFile('ninjas.html', 'utf8', function(errors, contents){
			if(errors){
				console.log(errors);
			} else {
				response.writeHead(200, {'Content-Type' : 'text/html'});
				response.write(contents);
				response.end();
			}
		});
	} else if (request.url == '/dojos/new'){
		fs.readFile('dojos.html', 'utf8', function(errors, contents){
			if(errors){
				console.log(errors);
			} else{
				response.writeHead(200, {'Content-Type':'text/html'});
				response.write(contents);
				response.end();
			}
		});
	// } else if(request.url === '/style/style.css'){
	// 	fs.readFile('/style/style.css', 'utf8', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'test/css'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/cat0.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/cat1.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/cat2.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/cat3.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/cat4.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/ninja0.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/ninja1.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/ninja2.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/ninja3.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// } else if(request.url === '/images/ninja4.png'){
	// 	fs.readFile('/style/style.css', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type':'image/png'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	} else {
		response.writeHead(418);
		response.end('I am a teapot.');
	}
});

server.listen(6789);
console.log('Running on localhost:6789');