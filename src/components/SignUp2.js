import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SingUpForm = ({history, values, errors, touched, status })=> {

    const [user, setUser] = useState({ });

    useEffect(() => {
        console.log("status has changed!", status);
        status && setUser(status);
        console.log("user has changed!", user);
      }, [status]);

      const handleNext = e => {
        e.preventDefault()
        history.push("/login2")
      }

    return (
      <Form>
          <h1>Sing Up</h1>
        <div>
            {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
            <Field type="text" name="first_name" placeholder="first name" />

            {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
            <Field type="text" name="last_name" placeholder="last name" />
        </div>
        <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="username" />
        </div>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        <button onClick={handleNext} type="submit">Submit</button>
      </Form>
    );
  }
  
  const FormikSingUpForm = withFormik({
    mapPropsToValues({first_name,last_name, username,email, password }) {
      return {
        first_name: first_name || "",
        last_name: last_name || "",
        username: username || "",
        email: email || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string()
        .required("First name is required"),
        last_name: Yup.string()
        .required("Last name is required"),
        username: Yup.string()
        .required("Username is required"),
        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      password: Yup.string()
        .min(10, "Password must be 10 characters or longer")
        .required("Password is required")
    }),
    handleSubmit(values, { resetForm, setStatus, setErrors}) {
      axiosWithAuth()
          .post('https://how-to-build-week.herokuapp.com/api/auth/register', values)
          .then(response => {
            console.log(response); // Data was created successfully and logs to console
            setStatus(response.data);
            resetForm();
          })
          .catch(err => {
            console.log(err); // There was an error creating the data and logs to console
          });
    }
  })(SingUpForm);
  
  export default FormikSingUpForm;