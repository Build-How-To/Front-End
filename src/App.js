import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HowToContext } from './context/HowToContext';

import SignIn from './components/SignIn';

import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
// import Header from './components/Header';
import Footer from './components/Footer';




import './App.css';
// import SignIn from './components/SignIn';


const App = (props) => {
  
  const [currentUser, setCurrentUser] = useState((localStorage.getItem('user')) ? JSON.pars(localStorage.getItem('user')) : {});
  
  return (
  <>
    <HowToContext.Provider value={{currentUser, setCurrentUser}}>
      

      <Switch>
      
        <Route exact path='/Signin' component={SignIn} />
        <Route exact path='/Signup' component={SignUp} />
     

    
      </Switch>
      <Footer />
      
    </HowToContext.Provider>
  </>
  );

}

export default App;
