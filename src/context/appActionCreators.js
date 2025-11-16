import actions from "./appActions";

export const logIn = (payload) => {
  return {
    type: actions.logIn,
    payload,
  };
};

export const logOut = () => {
  return {
    type: actions.logOut,
  };
};

export const onFavoritesClick = (payload) => {
  return {
    type: actions.onFavoritesClick,
    payload,
  };
};
