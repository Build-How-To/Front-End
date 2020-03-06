import React, {useState, useEffect} from "react";
import { withFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  margin: 2% 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content:center;

  h2{
    text-align:center;
  }
`

const StyledForm = styled(Form)`
  width: 30%;
  background: Gainsboro;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  padding: 0.6%;
  align-items:center;
  
`

const StyledField = styled(Field)`
  width: 100%;
  margin:5% 10%;
  margin-top:0;
`

const StyledButtons = styled.div`
  display:flex;
  width: 80%;
  justify-content: space-between;
`

const Schema = Yup.object().shape({
    username: Yup.string().required("Enter your username"),
    password: Yup.string().required("Enter your password")
  });
  const Login = props => {
    //state
    console.log('debug1', props)
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
          
          console.log("RES DATA", res.data);
          // props.setUserId(res.data.user_id);
          props.history.push("/home");
        })
        .catch(err => console.log(err));
    };
    return (
          <StyledDiv>
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
                <StyledForm onSubmit={handleSubmit}>
                      <label htmlFor="username">Username</label>
                      <StyledField
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                      />
                      <label htmlFor="password">Password</label>
                      <StyledField
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                      />
                  <StyledButtons>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                    <Link to="/signup">
                      <button>Register</button>
                    </Link>
                  </StyledButtons>
                  {errors.username && touched.username ? (
                    <div style={{ color: "red" }}>{errors.username}</div>
                  ) : null}
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  ) : null}
                </StyledForm>
              )}
            </Formik>
          </StyledDiv>
    );
  };
  export default Login;

