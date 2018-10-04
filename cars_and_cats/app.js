var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            if(errors){
                console.log(errors);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            };
        });
    } else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            if(errors){
                console.log(errors);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            }
        });
    } else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            if(errors){
                console.log(errors);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            }
        });
    } else if(request.url === '/cars/new') {
        fs.readFile('views/survey.html', 'utf8', function (errors, contents){
            if(errors){
                console.log(errors);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            }
        });
    } else if(request.url === '/images/alleycat.jpg'){
        fs.readFile('./images/alleycat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/images/cheshire.jpg'){
        fs.readFile('./images/cheshire.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    } else if(request.url === '/images/totoro.jpg'){
        fs.readFile('./images/totoro.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }  else if(request.url === '/images/fish.jpg'){
        fs.readFile('./images/fish.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }  else if(request.url === '/images/snail.jpg'){
        fs.readFile('./images/snail.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }  else if(request.url === '/images/train.jpg'){
        fs.readFile('./images/train.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    } else if(request.url === '/images/blackrock.jpg'){
        fs.readFile('./images/blackrock.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    } else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            if(errors){
                console.log(errors);
            } else {
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(contents); 
                response.end();
            }
        });
    } else {
        response.writeHead(404);
        response.end('File Not Found!');
    }
});

server.listen(6789)
console.log('Running at server 6789')
