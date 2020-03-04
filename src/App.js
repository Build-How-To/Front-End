
import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { HowToContext } from "./contexts/HowToContext";
import { HowToFormContext } from './contexts/HowToFormContext';

export default function App() {

  //add context API set data here
  return (
    <div className='App'>
      <HowToContext.Provider value={{}}>
        <HowToFormContext.Provider value ={{}}>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
      </Router>
      </HowToFormContext.Provider>
      </HowToContext.Provider>
      </div>
  );
}
