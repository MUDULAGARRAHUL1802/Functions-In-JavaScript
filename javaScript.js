function displayMovieDetails(obj) {
    console.log(obj.hero_name);
    console.log(obj.movie_name);
    console.log(obj.director_name);
    console.log(obj.plotof_movie);
}

let movie = {
    hero_name: "Robert Downey Jr.",
    movie_name: "Iron Man",
    director_name: "Jon Favreau",
    plotof_movie: "Tony Stark builds a suit to escape from terrorists and later fights evil forces."
};

displayMovieDetails(movie);
