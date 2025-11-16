import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../css/movies.module.css";
import { useMoviesContext } from "../context/moviesContext.js/MoviesContextProvider";

const Slider = () => {
  const { state } = useMoviesContext();
  const urlsArray = state.movies.map((movie) => movie.image);
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <div className={styles.slider_div}>
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={false}
        responsive={responsiveSettings}
      >
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
        <img
          src={`${urlsArray[Math.floor(Math.random() * 100)]}`}
          alt="random movie poster"
        />
      </Slide>
    </div>
  );
};

export default Slider;
