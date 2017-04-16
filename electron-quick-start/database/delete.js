var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/MBS';


var removeMovies = function(value, db, callback) {
   db.collection('movies').deleteMany(
      { "title" : value },
      function(err, results) {
         console.log("Why isn't this working")
         console.log(results);
         callback();
      }
   );
};

function remove(value) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    removeMovies(value, db, function() {
        db.close();
    });
  })
}

module.exports.remove = remove