import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const LoginForm = (props) =>{

    console.log("PROPS:", props)

    const handleNext = e => {
        e.preventDefault()
        props.history.push("/")
    }

    return (
        <Form>
            <h1>Log in</h1>
            <Field type="text" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
            <button onClick={handleNext} type="submit">Log in</button>
        </Form>
      );

}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
  
    handleSubmit(props,values) {
        // Make a POST request and send the credentials object to the api
        axiosWithAuth()
          .post('https://how-to-build-week.herokuapp.com/api/auth/login', values)
          .then(res => {
            window.localStorage.setItem('token', res.data.token);
            // navigate the user to /protected (whatever landing page)
          })
          .catch(err => console.log('props',props));
    }
  })(LoginForm);

export default FormikLoginForm;