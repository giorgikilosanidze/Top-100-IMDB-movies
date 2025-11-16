import React from "react";
import routes from "../constants/routes";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import { logOut, onFavoritesClick } from "../context/appActionCreators";
import styles from "../css/navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  return (
    <header>
      <h1 className={styles.navbar_h1}>IMDB top 100 movies</h1>
      <div className={styles.navbar_div}>
        <nav>
          <NavLink
            className={styles.navlink}
            key={routes.movies}
            to={routes.movies}
            onClick={() => dispatch(onFavoritesClick(true))}
          >
            Movies
          </NavLink>
          <NavLink
            className={styles.navlink}
            key={routes.favorites}
            to={routes.favorites}
            onClick={() => dispatch(onFavoritesClick(false))}
          >
            Favorites
          </NavLink>
        </nav>
        <button
          className={styles.logOut_btn}
          onClick={() => {
            navigate(routes.home);
            dispatch(logOut());
          }}
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default Navbar;
