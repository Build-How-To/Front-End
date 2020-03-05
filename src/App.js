
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

//components
import PrivateRoute from './components/PrivateRoute';

import Login2 from './components/Login2';
import FormikSingUpForm from './components/SignUp2';


import Home from './components/Home';
import Header from './components/Header';
import AddHowToForm from './components/HowTo/AddHowToForm';
import HowToList from './components/HowTo/HowToList';
import HowToCard from './components/HowTo/HowToCard';
import axiosWithAuth from './utils/axiosWithAuth';
//contextAPI
import { HowToContext } from "./contexts/HowToContext";
import { HowToFormContext } from './contexts/HowToFormContext';

export default function App(props) {

  

  const [ howToList, setHowToList ] = useState([]);

  useEffect(() => {
   axiosWithAuth()
    .get('/guides')
    .then(res => {
      console.log('response from getguide API', res);
      setHowToList(res.data)
  
    })
    .catch(err => {
      console.error('error getting HowTo List', err);
    });
  },[])
 
  console.log ('howto state',howToList);
  
  return (
    <div className='App'>
      <HowToContext.Provider value={{howToList}}>
        <HowToFormContext.Provider value ={{howToList, setHowToList}}>
      <Router>
        <Header />

          <Route exact path="/login2" render={props =><Login2 {...props }/>} /> 
          <Route exact path="/signup2" render={props =><FormikSingUpForm {...props }/>} />
        
         
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/howtolist" component={HowToList} />
        <PrivateRoute exact path="/howtocard/:id" component={HowToCard} />
        {/* <PrivateRoute exact path="/addhowto" component={AddHowToForm} /> */}

      </Router>
      </HowToFormContext.Provider>
      </HowToContext.Provider>
      </div>
  );
}
