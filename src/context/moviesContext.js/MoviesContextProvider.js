import React, { createContext, useContext, useEffect, useReducer } from "react";
import { moviesInitialState, moviesReducer } from "./moviesReducer";
import {
  saveFavoriteMovies,
  saveMovieDetails,
  saveMovieId,
} from "./moviesActionCreators";

const moviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, moviesInitialState);

  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movie"));
    if (movie) {
      movie.forEach((mov) => {
        dispatch(saveFavoriteMovies(mov));
      });
    }
  }, []);

  useEffect(() => {
    const movieDetails = JSON.parse(localStorage.getItem("movieDetails"));
    if (movieDetails) {
      dispatch(saveMovieDetails(movieDetails));
    }
  }, []);

  useEffect(() => {
    const movieId = JSON.parse(localStorage.getItem("movieId"));
    if (movieId) {
      dispatch(saveMovieId(movieId));
    }
  }, []);

  return (
    <moviesContext.Provider value={{ state, dispatch }}>
      {children}
    </moviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(moviesContext);
  if (context) {
    return context;
  }
  throw new Error("Movies context error");
};

export default MoviesContextProvider;
