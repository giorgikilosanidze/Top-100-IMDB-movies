import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api/imdb";
import { useMoviesContext } from "../context/moviesContext.js/MoviesContextProvider";
import {
  saveMoviesInfo,
  showMoviesError,
  toggleMoviesLoader,
} from "../context/moviesContext.js/moviesActionCreators";
import MoviesCards from "../components/MoviesCards";
import { BeatLoader } from "react-spinners";
import styles from "../css/movies.module.css";
import Slider from "../components/Slider";

const Movies = () => {
  const { state, dispatch } = useMoviesContext();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const pages = [];
  const totalPosts = state.movies.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    dispatch(toggleMoviesLoader());
    fetchMovies()
      .then((data) => {
        dispatch(saveMoviesInfo(data));
      })
      .catch((err) => {
        dispatch(showMoviesError(err.message));
      });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = state.movies.slice(firstPostIndex, lastPostIndex);

  if (state.moviesError) {
    return (
      <>
        {state.isMoviesDataLoading && <BeatLoader color="#36d7b7" />}
        <h2 className={styles.movies_h2}>Movies</h2>
        <h2 className={styles.movies_error}>{state.moviesError}</h2>
      </>
    );
  }

  return (
    <div>
      <h2 className={styles.movies_h2}>Movies</h2>
      {state.isMoviesDataLoading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "40px 0",
          }}
        >
          <BeatLoader color="#6366f1" />
          <p
            style={{
              marginTop: "12px",
              color: "#6366f1",
              fontWeight: "600",
            }}
          >
            Fetching movies, please wait...
          </p>
        </div>
      )}
      <Slider />
      <div className={styles.movies_div}>
        {currentPosts.map((movie) => (
          <MoviesCards key={movie.id} movie={movie} />
        ))}
      </div>
      <div className={styles.pagination_btns_div}>
        {pages.map((btnNumber) => (
          <button
            className={
              btnNumber === currentPage ? styles.active : styles.pagination_btns
            }
            key={btnNumber}
            onClick={() => {
              setCurrentPage(btnNumber);
              window.scroll(0, 0);
            }}
          >
            {btnNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Movies;
