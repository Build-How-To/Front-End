
import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
   <Router>
      <div>
        <Route path="/login" component={Login} />
      </div>
      <div>
        <Route path="/signup" component={Signup} />
      </div>
      </Router>
  );
}
