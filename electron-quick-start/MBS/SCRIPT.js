db.adminCommand('listDatabases');
doc = {
        title : "Inception",
        genre : "Comedy", 
        poster : "gett",
        director : "Christopher Nolan",
        release : "2010",
        cast : "Leonardo DiCaprio",
        plot : "A thieg"
}
db.movies.insert(doc);
db.movies.find("title" : "Fury", "Genere" : "Drama")
