import React from "react";
import SignUpForm from "../components/SignUpForm";
import { useAppContext } from "../context/AppContextProvider";
import styles from "../css/signUp.module.css";

const SignUp = () => {
  const { state } = useAppContext();
  return (
    <div>
      <h1 className={styles.signUp_h1}>IMDB top 100 movies</h1>
      <h2 className={styles.signUp_h2}>Sign Up Form</h2>
      {state.isUserLoggedIn ? (
        <h2>You are already logged in.</h2>
      ) : (
        <SignUpForm />
      )}
    </div>
  );
};

export default SignUp;
