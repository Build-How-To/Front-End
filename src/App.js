
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';
//components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Header from './components/Header';
import AddHowToForm from './components/HowTo/AddHowToForm';
//contextAPI
import { HowToContext } from "./contexts/HowToContext";
import { HowToFormContext } from './contexts/HowToFormContext';

export default function App() {

  const [howTo, setHowTo] = useState({
    title:'',
    description: '',
    category: '',
    difficulty:'',
    creator_user_id:'',
    tries: ''
  });

  const [ howToList, setHowToList ] = useState([]);

  Axios
  .get()
  .then(res => {
    console.log('response from getguide API', res);
    setHowToList(res.data)
  })
  .catch(err => {
    console.error('error getting HowTo List', err);
  }, [howTo]);

  //add context API set data here
  return (
    <div className='App'>
      <HowToContext.Provider value={{}}>
        <HowToFormContext.Provider value ={{}}>
      <Router>
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
        {/* <PrivateRoute exact path="/addhowto" component={AddHowToForm} /> */}
      </Router>
      </HowToFormContext.Provider>
      </HowToContext.Provider>
      </div>
  );
}
