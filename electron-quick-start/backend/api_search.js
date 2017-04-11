window.$ = window.jQuery = require('jquery')

function searchAPI(title, year, callBack) {	
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

module.exports.searchAPI = searchAPI