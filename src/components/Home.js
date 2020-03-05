import React from 'react';
import { Link } from 'react-router-dom';


const Home =(props) =>{
    
    const routeToHowTo = event => {
        event.preventDefault();
        props.history.push('/howtolist');
    };
    return(
        <div className="home-wrapper">
            <Link className="home-link" to ="/howtolist">Welcome to howTo!</Link>
            
        </div>
    )
}
export default Home;