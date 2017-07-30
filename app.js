
var routes = require('./routes')
var express = require('express');
var http = require('http');
var app = express();

routes.configure(app);

var expserver = http.createServer(app);

var port = 8000;
expserver.listen(port, function(){
    console.log('Server is connected to localhost:', port);
});


 

