import { jwtDecode } from "jwt-decode";

export const parseToken = (token) => {
  return jwtDecode(token);
};

export const toggleLocalStorage = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const isTokenValid = (token) => {
  const currentTime = Date.now() / 1000;
  const user = parseToken(token);
  return currentTime < user.exp;
};

export const moviesToggleLocalStorage = (movie) => {
  if (movie) {
    localStorage.setItem("movie", JSON.stringify(movie));
  } else {
    localStorage.removeItem("movie");
  }
};

export const moviesDetailsToggleLocalStorage = (movieDetails) => {
  if (movieDetails) {
    localStorage.setItem("movieDetails", JSON.stringify(movieDetails));
  } else {
    localStorage.removeItem("movieDetails");
  }
};

export const movieIdToggleLocalStorage = (movieId) => {
  if (movieId) {
    localStorage.setItem("movieId", JSON.stringify(movieId));
  } else {
    localStorage.removeItem("movieId");
  }
};

export const addOrRemoveLocalStorage = (addOrRemoveBtn) => {
  localStorage.setItem("addOrRemove", JSON.stringify(addOrRemoveBtn));
};

export const removeAddOrRemoveLocalStorage = () => {
  localStorage.removeItem("addOrRemove");
};
