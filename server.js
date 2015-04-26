var express = require('express');
var app = express();

var port  = process.env.PORT || 3000;


// db config
// var mongo = require('mongodb');
// var mongoClient = mongo.MongoClient;
// var dbUrl =  'mongodb://localhost/ben1';


// abstract db connection to a DAO and make connection here

// mongoClient.connect(dbUrl, function(err, db) {
//   console.log('connected');
//   db.close();
// });

app.use(express.static(__dirname + '/client'));


// import routes 
require('./server/routes')(app);

app.listen(port);
console.log('Server listening on port:', port);

exports = module.exports = app;
