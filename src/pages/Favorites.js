import React from "react";
import { useMoviesContext } from "../context/moviesContext.js/MoviesContextProvider";
import MoviesCards from "../components/MoviesCards";
import styles from "../css/favorites.module.css";

const Favorites = () => {
  const { state } = useMoviesContext();
  const { favoriteMovies } = state;

  return (
    <div>
      <h2 className={styles.favorites_h2}>Favorites</h2>
      <div className={styles.favorites_div}>
        {favoriteMovies.length >= 1 ? (
          favoriteMovies.map((movie) => (
            <MoviesCards key={movie.id} movie={movie} />
          ))
        ) : (
          <h2 className={styles.favorites_empty}>Favorites is empty.</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
