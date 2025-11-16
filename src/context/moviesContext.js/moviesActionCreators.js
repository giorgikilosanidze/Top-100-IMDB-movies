import moviesActions from "./moviesActions";

export const saveMoviesInfo = (payload) => {
  return {
    type: moviesActions.saveMoviesInfo,
    payload,
  };
};

export const showMoviesError = (payload) => {
  return {
    type: moviesActions.showMoviesError,
    payload,
  };
};

export const toggleMoviesLoader = () => {
  return {
    type: moviesActions.toggleMoviesLoader,
  };
};

export const saveFavoriteMovies = (payload) => {
  return {
    type: moviesActions.saveFavoriteMovies,
    payload,
  };
};

export const saveMovieId = (payload) => {
  return {
    type: moviesActions.saveMovieId,
    payload,
  };
};

export const saveMovieDetails = (payload) => {
  return {
    type: moviesActions.saveMovieDetails,
    payload,
  };
};

export const saveMoviesDetailsErrors = (payload) => {
  return {
    type: moviesActions.saveMoviesDetailsError,
    payload,
  };
};

export const deleteFavoriteMovies = (payload) => {
  return {
    type: moviesActions.deleteFavoriteMovie,
    payload,
  };
};
