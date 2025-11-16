import React from "react";
import LogInForm from "../components/LogInForm";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import styles from "../css/logIn.module.css";

const LogIn = () => {
  const location = useLocation();
  const { state } = useAppContext();

  return (
    <div>
      <h1 className={styles.logIn_h1}>IMDB top 100 movies</h1>
      <h2 className={styles.logIn_h2}>Log In Form</h2>
      {location.state?.success && (
        <h2 className={styles.congrats}>
          Congrats, you are successfully signed up!
        </h2>
      )}

      {state.isUserLoggedIn ? (
        <h2>You are already logged in.</h2>
      ) : (
        <LogInForm />
      )}
    </div>
  );
};

export default LogIn;
