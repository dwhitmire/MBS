window.$ = window.jQuery = require('jquery')
var movieAttributes = null

$('#go').click(function() { // clicking "Go" button
    var event = new Object()
    event['keyCode'] = 13
    searchAPI(event, addToArray)    
}) 


function searchAPI(event, callBack) {	
    if (event.keyCode == 13){ // if key press is enter 
        
        var title = $('#searchTitle').val()
        var year = $('#searchYear').val()
        var url = 'http://www.omdbapi.com/?t=' + title + '&y=' + year + '&plot=short&r=json'
        console.log(url)
        console.log(title)
        
        $.getJSON(url, function(movie) {
            if (callBack) {					
                callBack( {
                    'title':movie.Title,
                    'year':movie.Year,
                    'rated':movie.Rated,
                    'genre':movie.Genre,
                    'director':movie.Director,
                    'actors':movie.Actors,
                    'plot':movie.Plot,
                    'poster':movie.Poster
                })
            }            
        })        
    }
}

function addToArray(movieData) {
    movieAttributes = movieData
    console.log(movieAttributes['title'])
}

module.exports.searchAPI = searchAPI
module.exports.addToArray = addToArray