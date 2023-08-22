const moviesArray = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      duration: "2h 22min",
      genre: ["Crime", "Drama"],
      score: 8,
    },
    {
      title: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",
      duration: "2h 55min",
      genre: ["Crime", "Drama"],
      score: 9,
    },
    {
      title: "The Godfather: Part II",
      year: 1974,
      director: "Francis Ford Coppola",
      duration: "3h 22min",
      genre: ["Crime", "Drama"],
      score: 9,
    },
    // {
    //   title: "The Dark Knight",
    //   year: 2008,
    //   director: "Christopher Nolan",
    //   duration: "2h 32min",
    //   genre: ["Action", "Crime", "Drama", "Thriller"],
    //   score: 9,
    // },
    // {
    //   title: "12 Angry Men",
    //   year: 1957,
    //   director: "'Sidney Lumet",
    //   duration: "1h 36min",
    //   genre: ["Crime", "Drama"],
    //   score: 8.9,
    // },
  ];
  
  // Iteration 1: All directors? - Get the array of all directors.
  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
  // How could you "clean" a bit this array and make it unified (without duplicates)?
  function getAllDirectors(moviesArray) {
    let newArray = [];
    moviesArray.map((movie) => {
      newArray.push(movie.director);
    });
    return newArray;
  }
  
  const allDirectors = getAllDirectors(moviesArray);
  console.log(allDirectors);
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(moviesArray) {
    if (!moviesArray) return 0;
    let stevenSpielbergMovies = 0;
    let count = 0;
    moviesArray.filter((movie) => {
      if (movie.director === "Steven Spielberg") stevenSpielbergMovies++;
      if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
        count++;
    });
    return count;
  }
  
  console.log("howManyMovies: ", howManyMovies(moviesArray));
  
  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(moviesArray) {
    if (!moviesArray) return 0;
  
    let sum = 0;
    let count = 0;
  
    for (const movie of moviesArray) {
      if (movie.score !== undefined && movie.score !== '') {
        sum += movie.score;
        count++;
      }
    }
  
    if (count === 0) {
      return 0;
    }
  
    let avg = sum / count;
    return parseInt(avg.toFixed(2));
  }
  
  console.log("scoresAverage: ", scoresAverage(moviesArray));
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArray) {
    if (!moviesArray) return 0;
  
    let sum = 0;
    let count = 0;
  
    for (const movie of moviesArray) {
      if (
        movie.score !== undefined &&
        movie.score !== "" &&
        movie.genre.includes("Drama")
      ) {
        sum += movie.score;
        count++;
      }
    }
  
    if (count === 0) {
      return 0;
    }
  
    return parseFloat(sum / count);
  }
  
  console.log("dramaMoviesScore: ", dramaMoviesScore(moviesArray));
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesArray) {
    let orderedList = moviesArray
        .sort((a, b) => a.year - b.year);
    return orderedList;
  }
  
  console.log("orderByYear:", orderByYear(moviesArray));
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(movie => movie.title);
  
    return sortedMovies.slice(0, 20);
  }
  
  
  console.log("orderAlphabetically: ", orderAlphabetically(moviesArray));
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes(moviesArray) {}
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {}
  