import {
  addOrRemoveLocalStorage,
  movieIdToggleLocalStorage,
  moviesDetailsToggleLocalStorage,
  moviesToggleLocalStorage,
  parseToken,
  removeAddOrRemoveLocalStorage,
  toggleLocalStorage,
} from "../utils/jwt";
import actions from "./appActions";

export const initialState = {
  isUserLoggedIn: false,
  token: "",
  user: null,
  onFavorites: true,
};

export const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.logIn: {
      const user = parseToken(payload);
      toggleLocalStorage(payload);
      return { ...state, isUserLoggedIn: true, token: payload, user };
    }

    case actions.logOut: {
      toggleLocalStorage();
      moviesToggleLocalStorage();
      movieIdToggleLocalStorage();
      moviesDetailsToggleLocalStorage();
      removeAddOrRemoveLocalStorage();
      return {
        ...state,
        isUserLoggedIn: false,
        token: "",
        user: null,
        onFavorites: true,
      };
    }

    case actions.onFavoritesClick: {
      addOrRemoveLocalStorage(payload);
      return { ...state, onFavorites: payload };
    }

    default:
      return state;
  }
};
