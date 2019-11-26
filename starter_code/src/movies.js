/* eslint no-restricted-globals: 'off' */

function copyArray( array ) {
    return JSON.parse(JSON.stringify( array ));
}

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear( movies ) {
    let newMovies = copyArray( movies );
    
    return newMovies.sort( (firstMovie, secondMovie) => (firstMovie.year === secondMovie.year ? (firstMovie.title > secondMovie.title? 1 : -1) : (firstMovie.year - secondMovie.year)) );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies( movies ) {
    let newMovies = copyArray( movies );

    return newMovies.filter( (movie) => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) ).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically( movies ) {
    let newMovies = copyArray( movies );

    return newMovies.sort( (firstMovie, secondMovie) => (firstMovie.title.localeCompare(secondMovie.title)) ).map( movie => movie.title).slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage( movies ) {
    let newMovies = copyArray( movies );
    let avgRate;

    if (newMovies.length === 0) return 0;
    avgRate = newMovies.reduce( (tot, movie) => tot + ( typeof movie.rate === "number" ? movie.rate : 0 ), 0) / newMovies.length;
    return Math.round(avgRate*100)/100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate( movies ){
    let newMovies = copyArray( movies );
    return ratesAverage( newMovies.filter( (movie) => (movie.genre.includes("Drama")) ) );
}

let myMovies = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    }
];

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map(function (movie) {
        const newMovie = JSON.parse(JSON.stringify(movie));
        newMovie.duration = convertHoursToMinutes(movie.duration);
        return newMovie;
    })
}

function convertHoursToMinutes(duration) {
    return duration.split(" ").reduce(
        (tot, el) => {
            if(el.includes("h")) tot += (parseInt(el) * 60)
            if(el.includes("min")) tot += (parseInt(el))
            return tot
        }
    , 0)
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
