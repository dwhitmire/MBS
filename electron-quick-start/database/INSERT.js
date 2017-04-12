var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/MBS';

//just inser the info and will insert into collection 

var insertDocument = function(db, callback) {
   db.collection('movies').insertOne( {
        "title" : "Inception",
        "genre": "Comedy", 
        "poster" : "gett",
        "director" : "Christopher Nolan",
        "release" : "2010",
        "cast" : "Leonardo DiCaprio",
        "plot" : "A thieg"
}, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the movies collection.");
    callback();
  });
};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});