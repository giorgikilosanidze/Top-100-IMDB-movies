import React, { useState } from "react";
import { useFormik } from "formik";
import { logInSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import authHandler from "../api/auth";
import authActions from "../constants/authActions";
import { useAppContext } from "../context/AppContextProvider";
import { logIn } from "../context/appActionCreators";
import { BeatLoader } from "react-spinners";
import styles from "../css/logIn.module.css";

const LogInForm = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema: logInSchema,
      onSubmit: (values, actions) => {
        setIsLoading(true);
        authHandler(authActions.logIn, values)
          .then((data) => {
            dispatch(logIn(data.token));
            actions.resetForm();
            navigate(routes.movies);
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      },
    });

  return (
    <form className={styles.logIn_form} onSubmit={handleSubmit}>
      <div className={styles.logIn_form_divs}>
        <label className={styles.logIn_form_labels} htmlFor="userName">
          Username:
        </label>
        <input
          className={styles.logIn_form_inputs}
          type="text"
          name="userName"
          placeholder="Enter username"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.userName && touched.userName && (
          <p className={styles.logIn_errors}>{errors.userName}</p>
        )}
      </div>

      <div className={styles.logIn_form_divs}>
        <label className={styles.logIn_form_labels} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.logIn_form_inputs}
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className={styles.logIn_errors}>{errors.password}</p>
        )}
      </div>

      <button className={styles.logIn_submitBtn} type="submit">
        Log in
      </button>

      {error && <h2>{error}</h2>}
      {isLoading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <BeatLoader color="#6366f1" />
          <p
            style={{
              marginTop: "10px",
              color: "#6366f1",
              fontWeight: "500",
            }}
          >
            Server is waking up, please wait...
          </p>
        </div>
      )}
    </form>
  );
};

export default LogInForm;
