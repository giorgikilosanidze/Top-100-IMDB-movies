import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import authHandler from "../api/auth";
import authActions from "../constants/authActions";
import { BeatLoader } from "react-spinners";
import styles from "../css/signUp.module.css";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        userName: "",
        email: "",
        password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        setIsLoading(true);
        authHandler(authActions.signUp, values)
          .then(() => {
            navigate(routes.logIn, { state: { success: true } });
            actions.resetForm();
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
    <form className={styles.signUp_form} onSubmit={handleSubmit}>
      <div className={styles.signUp_form_divs}>
        <label className={styles.signUp_form_labels} htmlFor="userName">
          Username:
        </label>
        <input
          className={styles.signUp_form_inputs}
          type="text"
          name="userName"
          placeholder="Enter username"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.userName && touched.userName && (
          <p className={styles.signUp_errors}>{errors.userName}</p>
        )}
      </div>

      <div className={styles.signUp_form_divs}>
        <label className={styles.signUp_form_labels} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.signUp_form_inputs}
          type="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className={styles.signUp_errors}>{errors.email}</p>
        )}
      </div>

      <div className={styles.signUp_form_divs}>
        <label className={styles.signUp_form_labels} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.signUp_form_inputs}
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className={styles.signUp_errors}>{errors.password}</p>
        )}
      </div>

      <button className={styles.signUp_submitBtn} type="submit">
        Sign up
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

export default SignUpForm;
