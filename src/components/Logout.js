import React, { useEffect, useContext } from 'react';
import { HowToContext } from '../contexts/HowToContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Logout = (props) => {
    const {setCurrentUser} = useContext(HowToContext);

useEffect(() => {
    axiosWithAuth()
    .get('/auth/logout')
    .then(res => setCurrentUser({}))
    .catch(err =>console.log('error logging out', err))

},[]);
localStorage.removeItem('token');
localStorage.removeItem('user');
props.history.push('/login');

return(<></>)
}

export default Logout;