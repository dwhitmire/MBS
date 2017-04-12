var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/MBS';


var removeMovies = function(db, callback) {
   db.collection('movies').deleteMany(
      { "title": "Inception" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeMovies(db, function() {
      db.close();
  });
});