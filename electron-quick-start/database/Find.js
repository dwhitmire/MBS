var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID
var url = 'mongodb://localhost:27017/MBS'



//to display all the movies 

var getAllMovies = function(db, callback) {
   var cursor = db.collection('movies').find( )
   cursor.toArray(function(err, documents) {
      console.log(documents)
      callback(documents)
   })
}

//to find from title or any attribute 
var findMovies = function(attribute1, contains1, db, callback, 
                          attribute2, contains2, 
                          attribute3, contains3, 
                          attribute4, contains4,
                          attribute5, contains5,
                          attribute6, contains6 ) 
{
   // array to push everything to and return
   var movies = []

   //var cursor = db.collection('movies').find({$elemMatch: {query}})
   if (attribute6 && contains6) {
      var cursor = db.collection('movies').find( {$and: [
        {[attribute1] : contains1},
        {[attribute2] : contains2},
        {[attribute3] : contains3},
        {[attribute4] : contains4},
        {[attribute5] : contains5},
        {[attribute6] : contains6}     
      ]})
   }
   else if (attribute5 && contains5) {
      var cursor = db.collection('movies').find( {$and: [
        {[attribute1] : contains1},
        {[attribute2] : contains2},
        {[attribute3] : contains3},
        {[attribute4] : contains4},
        {[attribute5] : contains5}   
      ]})
   }
   else if (attribute4 && contains4) {
      var cursor = db.collection('movies').find( {$and: [
        {[attribute1] : contains1},
        {[attribute2] : contains2},
        {[attribute3] : contains3},
        {[attribute4] : contains4}   
      ]})
   }
   else if (attribute3 && contains3) {
      var cursor = db.collection('movies').find( {$and: [
        {[attribute1] : contains1},
        {[attribute2] : contains2},
        {[attribute3] : contains3}
      ]})
   }
   else if (attribute2 && contains2) {
     var cursor = db.collection('movies').find( {$and: [
        {[attribute1] : contains1},
        {[attribute2] : contains2}
      ]})
   }
   else { // only one search attribute
      var cursor = db.collection('movies').find(
        {[attribute1] : contains1}
      )
   }
   
   cursor.toArray(function(err, documents) {
      console.log(documents)
      callback(documents)
   })
   console.log(movies)   
}

function search(attritube, contains, callBack, 
                          attribute2, contains2, 
                          attribute3, contains3, 
                          attribute4, contains4,
                          attribute5, contains5,
                          attribute6, contains6) {
  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err)
      findMovies(attritube, contains, db, function(movies) {  
          db.close()
          if (callBack) {
            callBack(movies, "title")
          }
      }, 
      attribute2, contains2, 
      attribute3, contains3, 
      attribute4, contains4,
      attribute5, contains5,
      attribute6, contains6)
  })
}

// print to console
function printAll(callBack, sortby) {
  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err)
      getAllMovies(db, function(doc) {
          db.close()
          if (callBack) {
            callBack(doc, sortby)
          }
      })
  })
}

module.exports.printAll = printAll
module.exports.search = search