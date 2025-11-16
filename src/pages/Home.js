import React from "react";
import LogInOrSignUp from "../components/LogInOrSignUp";
import { useAppContext } from "../context/AppContextProvider";
import styles from "../css/home.module.css";

const Home = () => {
  const { state } = useAppContext();
  return (
    <div className={styles.home_div}>
      <h1 className={styles.home_h1}>IMDB top 100 movies</h1>
      {state.isUserLoggedIn ? (
        <h2>You are already logged in.</h2>
      ) : (
        <LogInOrSignUp />
      )}
    </div>
  );
};

export default Home;
