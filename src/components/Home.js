import React from 'react';

const Home =(props) =>{
    const routeToHowTo = event => {
        event.preventDefault();
        props.history.push('/howtolist');
    };

    return(
        <div>
            <h1>Hello to howTo!</h1>
            <button onClick={routeToHowTo}>
                Learn HowTo!
            </button>
        </div>
    )
}

export default Home;