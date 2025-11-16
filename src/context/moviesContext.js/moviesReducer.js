import {
  movieIdToggleLocalStorage,
  moviesDetailsToggleLocalStorage,
  moviesToggleLocalStorage,
} from "../../utils/jwt";
import moviesActions from "./moviesActions";

export const moviesInitialState = {
  movies: [],
  moviesError: "",
  isMoviesDataLoading: false,
  favoriteMovies: [],
  movieId: "",
  movieDetails: {},
  moviesDetailsError: "",
  selectedGenres: [],
};

export const moviesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case moviesActions.saveMoviesInfo: {
      return { ...state, movies: payload, isMoviesDataLoading: false };
    }

    case moviesActions.showMoviesError: {
      return { ...state, moviesError: payload, isMoviesDataLoading: false };
    }

    case moviesActions.toggleMoviesLoader: {
      return { ...state, isMoviesDataLoading: true };
    }

    case moviesActions.saveFavoriteMovies: {
      const updatedFavorites = [...state.favoriteMovies, payload];
      moviesToggleLocalStorage(updatedFavorites);
      return { ...state, favoriteMovies: updatedFavorites };
    }

    case moviesActions.saveMovieId: {
      movieIdToggleLocalStorage(payload);
      return { ...state, movieId: payload };
    }

    case moviesActions.saveMovieDetails: {
      moviesDetailsToggleLocalStorage(payload);
      return { ...state, movieDetails: payload, isMoviesDataLoading: false };
    }

    case moviesActions.saveMoviesDetailsError: {
      return {
        ...state,
        moviesDetailsError: payload,
        isMoviesDataLoading: false,
      };
    }

    case moviesActions.deleteFavoriteMovie: {
      moviesToggleLocalStorage(payload);
      return { ...state, favoriteMovies: payload };
    }

    default:
      return state;
  }
};
