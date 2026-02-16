import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoviesContext } from "../context/moviesContext.js/MoviesContextProvider";
import { fetchMovieDetails } from "../api/imdb";
import {
  saveMovieDetails,
  saveMoviesDetailsErrors,
  toggleMoviesLoader,
} from "../context/moviesContext.js/moviesActionCreators";
import { BeatLoader } from "react-spinners";
import styles from "../css/details.module.css";

const DetailsPage = () => {
  const params = useParams();
  const { state, dispatch } = useMoviesContext();
  const { movieDetails } = state;
  const genres = movieDetails.genre?.join(", ");
  const director = movieDetails.director?.join(", ");
  const writers = movieDetails.writers?.join(", ");
  const isEmpty = Object.keys(movieDetails);
  const embedTrailer = movieDetails.trailer_embed_link?.replace(
    "youtube",
    "youtube-nocookie",
  );

  useEffect(() => {
    dispatch(toggleMoviesLoader());
    fetchMovieDetails(params.movieID)
      .then((data) => {
        dispatch(saveMovieDetails(data));
      })
      .catch((err) => {
        dispatch(saveMoviesDetailsErrors(err.message));
      });
  }, []);

  if (state.moviesDetailsError) {
    return (
      <>
        {state.isMoviesDataLoading && <BeatLoader color="#36d7b7" />}
        <h2 className={styles.details_h1}>Details Page</h2>
        <h2 className={styles.details_error}>{state.moviesDetailsError}</h2>
      </>
    );
  }

  return (
    <div>
      <h1 className={styles.details_h1}>{movieDetails.title}</h1>
      {state.isMoviesDataLoading && <BeatLoader color="#36d7b7" />}
      {isEmpty.length >= 1 ? (
        <>
          <div className={styles.details_div}>
            <img
              className={styles.details_img}
              src={movieDetails.image}
              alt={`${movieDetails.title} poster`}
            />

            <iframe
              src={embedTrailer}
              allowFullScreen
              title={`${movieDetails.title} trailer`}
            ></iframe>
          </div>

          <div className={styles.movie_details_div}>
            <img
              className={styles.details_img2}
              src={movieDetails.image}
              alt={`${movieDetails.title} poster`}
            />

            <div>
              <p className={styles.movie_details_p_tags}>
                Title: {movieDetails.title}
              </p>
              <p className={styles.movie_details_p_tags}>
                Rank: {movieDetails.rank}
              </p>
              <p className={styles.movie_details_p_tags}>
                Rating: {movieDetails.rating}
              </p>
              <p className={styles.movie_details_p_tags}>
                Year: {movieDetails.year}
              </p>
              <p className={styles.movie_details_p_tags}>
                Description: {movieDetails.description}
              </p>
              <p className={styles.movie_details_p_tags}>Genre: {genres}</p>
              <p className={styles.movie_details_p_tags}>
                Director: {director}
              </p>
              <p className={styles.movie_details_p_tags}>Writers: {writers}</p>
              <p className={styles.movie_details_p_tags}>
                Imdb_link:{" "}
                <a href={movieDetails.imdb_link} target="blank">
                  {movieDetails.imdb_link}
                </a>
              </p>
            </div>
          </div>
        </>
      ) : (
        <h2 className={styles.details_empty}>Details page is empty.</h2>
      )}
    </div>
  );
};

export default DetailsPage;
