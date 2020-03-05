
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

//components
import PrivateRoute from './components/PrivateRoute';

import Login2 from './components/Login2';

import Signup from './components/SignUp';


import Logout from './components/Logout';
import UpdateHowToForm from './components/HowTo/UpdateHowToForm';
import Home from './components/Home';
import Header from './components/Header';
import AddHowToForm from './components/HowTo/AddHowToForm';
import HowToList from './components/HowTo/HowToList';
import HowToCard from './components/HowTo/HowToCard';
import AddReviewForm from './components/AddReviewForm'
import axiosWithAuth from './utils/axiosWithAuth';
//contextAPI
import { HowToContext } from "./contexts/HowToContext";
import { HowToFormContext } from './contexts/HowToFormContext';

const App = (props) => {

  

  const [ howToList, setHowToList ] = useState([]);

  useEffect(() => {
   axiosWithAuth()
    .get('/guides')
    .then(res => {
      console.log('response from guide axios call', res)
      //console.log('response from getguide API', res);
      setHowToList(res.data)
    })
    .catch(err => {
      //console.error('error getting HowTo List', err);
    } );
  },[])
 
  console.log ('howto state',howToList);
  
  return (
    <div className='App'>
      <HowToContext.Provider value={{howToList}}>
        <HowToFormContext.Provider value ={{howToList, setHowToList}}>
      <Router>

          <Route exact path="/login" render={props =><Login2 {...props }/>} /> 
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
          {/*<Route exact path="/signup" render={props =><FormikSingUpForm {...props }/>} />*/}
        
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/howtolist" component={HowToList} />
          {/* <PrivateRoute exact path="/howtocard/:id" component={HowToCard} /> */}
          <PrivateRoute exact path="/addreviewform" component={AddReviewForm} />
          <PrivateRoute exact path="/updatehowtoform/:id" render={props => <UpdateHowToForm {...props} />} />
         


      </Router>
      </HowToFormContext.Provider>
      </HowToContext.Provider>
     </div>
  );
}

export default App;
