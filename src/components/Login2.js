import React, {useState, useEffect} from "react";
import { withFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth';

  
const Schema = Yup.object().shape({
    username: Yup.string().required("Enter your username"),
    password: Yup.string().required("Enter your password")
  });
  const Login = props => {
    //state
    const [credentials, setCredentials] = useState({
      username: "",
      password: ""
    });
    console.log("CREDS:", credentials);
    const submit = (values, tools) => {
      // console.log(values, tools);
      axiosWithAuth()
        .post("/auth/login", values)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user_id);
          console.log("RES DATA", res.data);
          props.setUserId(res.data.user_id);
          props.history.push("/");
        })
        .catch(err => console.log(err));
    };
    return (
      <div className="login">
        <h1>
          <ion-icon name="pin"></ion-icon>Airbnb Optimal Price
        </h1>
        <div className="flex-container">
         
          <div className="form-login">
            <h2>Login</h2>
            <Formik
              initialValues={{
                username: "",
                password: ""
              }}
              validationSchema={Schema}
              onSubmit={(values, tools) => {
                submit(values, tools);
              }}
            >
              {({ errors, touched, isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <ion-icon name="person"></ion-icon>
                    <div className="input-field">
                      <label htmlFor="username">Username</label>
                      <Field
                        id="username"
                        type="text"
                        name="username"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="input-container">
                    <ion-icon name="lock"></ion-icon>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                    <Link to="/register">
                      <button>Register</button>
                    </Link>
                  </div>
                  {errors.username && touched.username ? (
                    <div style={{ color: "red" }}>{errors.username}</div>
                  ) : null}
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  };
  export default Login;

