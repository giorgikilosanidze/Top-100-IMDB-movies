import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { useMoviesContext } from "../context/moviesContext.js/MoviesContextProvider";
import {
  deleteFavoriteMovies,
  saveFavoriteMovies,
  saveMovieId,
} from "../context/moviesContext.js/moviesActionCreators";
import { useAppContext } from "../context/AppContextProvider";
import styles from "../css/movies.module.css";

const MoviesCards = ({ movie }) => {
  const appContext = useAppContext();
  const { state, dispatch } = useMoviesContext();
  const genres = movie.genre?.join(", ");
  const navigate = useNavigate();

  return (
    <div className={styles.movie_cards}>
      <div className={styles.movies_h3_div}>
        <h3 className={styles.movies_h3}>{movie.title}</h3>
      </div>
      <div>
        <div className={styles.movies_img_div}>
          <img src={movie.image} alt={`${movie.title} poster`} />
        </div>
        <div className={styles.movies_description_div}>
          <p className={styles.movie_p_tags}>Rank: {movie.rank}</p>
          <p className={styles.movie_p_tags}>Rating: {movie.rating}</p>
          <p className={styles.movie_p_tags}>Year: {movie.year}</p>
          <div className={styles.genres_div}>
            <p className={styles.movie_p_tags}>Genre: {genres}</p>
          </div>
        </div>
      </div>
      <div className={styles.movieCards_btns_div}>
        {appContext.state.onFavorites ? (
          <button
            className={styles.movies_fav_det_rem_btns}
            onClick={() => {
              const isFavorite = state.favoriteMovies.some(
                (favorite) => favorite.id === movie.id,
              );
              if (!isFavorite) {
                dispatch(saveFavoriteMovies(movie));
              } else {
                alert("This movie is already in favorites.");
              }
            }}
          >
            Add to favorites
          </button>
        ) : (
          <button
            className={styles.movies_fav_det_rem_btns}
            onClick={() => {
              const newFavorites = state.favoriteMovies.filter(
                (movieToDelete) => movieToDelete.id !== movie.id,
              );
              dispatch(deleteFavoriteMovies(newFavorites));
            }}
          >
            Remove from favorites
          </button>
        )}

        <button
          className={styles.movies_fav_det_rem_btns}
          onClick={() => {
            const movieId = state.movies.find(
              (element) => element.id === movie.id,
            );
            dispatch(saveMovieId(movieId.id));
            navigate(`${routes.movies}/${movie.id}`);
            window.scroll(0, 0);
          }}
        >
          Details page
        </button>
      </div>
    </div>
  );
};

export default MoviesCards;
