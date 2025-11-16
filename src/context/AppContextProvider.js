import React, { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initialState } from "./appReducer";
import { logIn, onFavoritesClick } from "./appActionCreators";
import { isTokenValid } from "../utils/jwt";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenValid(token)) {
      dispatch(logIn(token));
    }
  }, []);

  useEffect(() => {
    const addOrRemoveFavorites = localStorage.getItem("addOrRemove");
    if (addOrRemoveFavorites !== null) {
      dispatch(onFavoritesClick(JSON.parse(addOrRemoveFavorites)));
    }
  }, []);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error("App context error");
};

export default AppContextProvider;
