var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/MBS';


var updateMovies = function(db, callback) {
   db.collection('restaurants').updateOne(
      { "title" : "Fury" },
      {
        $set: { "plot": "chaning plot" },
        $currentDate: { "lastModified": true }
      }, function(err, results) {
      console.log(results);
      callback();
   });
};


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  updateMovies(db, function() {
      db.close();
  });
});