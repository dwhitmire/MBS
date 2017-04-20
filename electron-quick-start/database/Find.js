var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID
var url = 'mongodb://localhost:27017/MBS'



//to display all the movies 

var getAllMovies = function(db, callback) {
   var cursor = db.collection('movies').find( )
   cursor.each(function(err, doc) {
      if (callback) {
        callback(doc)     
      } 
   })
}

//to find from title or any attribute 
var findMovies = function(attribute, contains, db, callback) {
   var query = {}
   query[attribute] = contains
   var cursor = db.collection('movies').find(query)
   cursor.each(function(err, doc) {
      assert.equal(err, null)
      if (callback) {
        callback(doc)     
      } 
   })
}

function search(attritube, contains, callBack) {
  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err)
      findMovies(attritube, contains, db, function(doc) {       
          db.close()
          if (callBack) {
            callBack(doc)
          }
      })
  })
}

// print to console
function printAll(callBack) {
  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err)
      getAllMovies(db, function(doc) {
          db.close()
          if (callBack) {
            callBack(doc)
          }
      })
  })
}

module.exports.printAll = printAll
module.exports.search = search