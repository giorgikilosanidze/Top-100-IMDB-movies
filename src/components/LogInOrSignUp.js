import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import styles from "../css/home.module.css";

const LogInOrSignUp = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logIn_signup_div}>
      <div className={styles.login_signup_div_divs}>
        <h2 className={styles.home_h2}>
          If you don&apos;t have an account sign up.
        </h2>
        <button
          className={styles.home_buttons}
          onClick={() => navigate(routes.signUp)}
        >
          Sign Up
        </button>
      </div>
      <div className={styles.login_signup_div_divs}>
        <h2 className={styles.home_h2}>
          If you already have an account log in.
        </h2>
        <button
          className={styles.home_buttons}
          onClick={() => navigate(routes.logIn)}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogInOrSignUp;
