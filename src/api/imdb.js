export async function fetchMovies() {
  const resp = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  });

  const result = await resp.json();

  if (resp.ok) {
    return result;
  }
  throw new Error(result.message);
}

export async function fetchMovieDetails(movieId) {
  if (movieId.startsWith("top")) {
    const resp = await fetch(
      `https://imdb-top-100-movies.p.rapidapi.com/${movieId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
          "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
        },
      },
    );

    const result = await resp.json();

    if (resp.ok) {
      return result;
    }
    throw new Error(result.message);
  } else {
    return false;
  }
}
