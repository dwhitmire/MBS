var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/MBS';



//to display all the movies 

var findMovies = function(db, callback) {
   var cursor =db.collection('movies').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         console.log("DB is empty")
         callback();
      }
   });
};

/*

//to find from title or any attribute 

var findMovies = function(db, callback) {
   var cursor =db.collection('movies').find( { "title": "Fury" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

*/

function printAll() {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findMovies(db, function() {
        db.close();
    });
  })
}

module.exports.printAll = printAll