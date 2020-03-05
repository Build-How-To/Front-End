import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import  { HowToContext } from '../../contexts/HowToContext';


const HowToList = props =>{
    const { howToList } =useContext(HowToContext)
    console.log('from the howto context', howToList)
    return (
        <div className="howto-list-wrapper">
            {howToList.map(howTo => (
                <div className="howTo-card" key={howTo.id}>
                    <NavLink exact to={`/howtocard/${howTo.id}`}>
                    <h1>{howTo.title}</h1>
                    {/* <p>Description: {howTo.description}</p> */}
                    <p>Category: {howTo.category}</p>
                    <p>Difficulty: {howTo.difficulty}</p>
                    </NavLink>
                </div>
                
                    
           ))}
        </div>
    )
}

export default HowToList;