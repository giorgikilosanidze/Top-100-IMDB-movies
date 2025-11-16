import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import routes from "../constants/routes";
import { useNavigate } from "react-router-dom";
import styles from "../css/authGuard.module.css";

const AuthGuard = ({ children }) => {
  const { state } = useAppContext();
  const navigate = useNavigate();
  if (!state.isUserLoggedIn) {
    return (
      <div>
        <h1 className={styles.authGuard_h1}>You are not logged in!</h1>
        <div className={styles.authGuard_div}>
          <button
            className={styles.authGuard_btns}
            onClick={() => navigate(routes.signUp)}
          >
            Sign up
          </button>
          <button
            className={styles.authGuard_btns}
            onClick={() => navigate(routes.logIn)}
          >
            Log In
          </button>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
