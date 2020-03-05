import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import  { HowToContext } from '../../contexts/HowToContext';


const HowToList = props =>{
    const { howToList } =useContext(HowToContext)
    console.log('from the howto context', howToList)
    return (
        <div>
            {howToList.map(howTo => (
                <div key={howTo.id}>
                    <NavLink exact to={`/howtocard/${howTo.id}`}>
                    <h1>Title: {howTo.title}</h1>
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