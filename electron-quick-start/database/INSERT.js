var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/MBS';

//just inser the info and will insert into collection 

var insertDocument = function(title, year, rated, genre, director, actors, plot, poster, db, callback) {
   db.collection('movies').insertOne( {
        "title" : title,
        "year" : year,
        "rated" : rated,
        "genre": genre, 
        "director" : director,
        "actors" : actors,
        "plot" : plot,
        "poster" : poster
}, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the movies collection.");
    callback();
  });
};

function insert(title, year, rated, genre, director, actors, plot, poster) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(title, year, rated, genre, director, actors, plot, poster, db, function() {
        db.close();
    });
  })
}

module.exports.insert = insert