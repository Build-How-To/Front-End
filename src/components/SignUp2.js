import React, {useState, useEffect} from "react";
import { withFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth';

// const SingUpForm = ({history, values, errors, touched, status })=> {

//     const [user, setUser] = useState({ });

//     useEffect(() => {
//        // console.log("status has changed!", status);
//         status && setUser(status);
//         //console.log("user has changed!", user);
//       }, [status]);

//       const handleNext = e => {
//         e.preventDefault()

//         //history.push("/login2")

//       }

//     return (
//       <Form>
//           <h1>Sing Up</h1>
//         <div>
//             {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
//             <Field type="text" name="first_name" placeholder="first name" />

//             {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
//             <Field type="text" name="last_name" placeholder="last name" />
//         </div>
//         <div>
//           {touched.username && errors.username && <p>{errors.username}</p>}
//           <Field type="text" name="username" placeholder="username" />
//         </div>
//         <div>
//           {touched.email && errors.email && <p>{errors.email}</p>}
//           <Field type="email" name="email" placeholder="Email" />
//         </div>
//         <div>
//           {touched.password && errors.password && <p>{errors.password}</p>}
//           <Field type="password" name="password" placeholder="Password" />
//         </div>
//         <button onClick={handleNext} type="submit">Submit</button>
//       </Form>
//     );
//   }
  
//   const FormikSingUpForm = withFormik({
//     mapPropsToValues({first_name,last_name, username,email, password }) {
//       return {
//         first_name: first_name || "",
//         last_name: last_name || "",
//         username: username || "",
//         email: email || "",
//         password: password || ""
//       };
//     },
//     validationSchema: Yup.object().shape({
//         first_name: Yup.string()
//         .required("First name is required"),
//         last_name: Yup.string()
//         .required("Last name is required"),
//         username: Yup.string()
//         .required("Username is required"),
//         email: Yup.string()
//         .email("Email not valid")
//         .required("Email is required"),
//       email: Yup.string()
//         .email("Email not valid")
//         .required("Email is required"),
//       password: Yup.string()
//         .min(10, "Password must be 10 characters or longer")
//         .required("Password is required")
//     }),
//     handleSubmit(values, { resetForm, setStatus, setErrors}) {
//       axiosWithAuth()
//           .post('https://how-to-build-week.herokuapp.com/api/auth/register', values)
//           .then(response => {
//             console.log(response); // Data was created successfully and logs to console
//             setStatus(response.data);
//             resetForm();
//           })
//           .catch(err => {
//             console.log(err); // There was an error creating the data and logs to console
//           });
//     }
//   })(SingUpForm);
  
//   export default FormikSingUpForm;

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
        props.history.push("/Dashboard/Home");
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