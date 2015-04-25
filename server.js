var express = require('express');
var path    = require('path');

var app = express();

// routes 
app.get('/', function(req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  
  console.log('Server listening on port: ', port);
});
