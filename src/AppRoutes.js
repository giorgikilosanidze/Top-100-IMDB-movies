import React from "react";
import { Routes, Route } from "react-router-dom";
import appRoutes from "./config/routes";
import MoviesContextProvider from "./context/moviesContext.js/MoviesContextProvider";

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.Guard ? (
              <route.Guard>
                <MoviesContextProvider>
                  <route.Component />
                </MoviesContextProvider>
              </route.Guard>
            ) : (
              <route.Component />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
