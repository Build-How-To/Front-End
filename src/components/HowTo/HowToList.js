import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import  { HowToContext } from '../../contexts/HowToContext';
import styled from 'styled-components';


const StyledHowToDiv = styled.div`
display:flex;
  border: 1 px solid black;
  text-decoration: none;
  color: red;
`

const StyledButton =styled.button`
background-color: green;
`
const HowToList = props =>{
    const { howToList } =useContext(HowToContext)
    console.log('from the howto context', howToList)
    
    return (
        <div className="howto-list-wrapper">
            {howToList.map(howTo => (

                <StyledHowToDiv key={howTo.id}>
                    <NavLink className="howto-Nav"exact to={`/howtocard/${howTo.id}`}>
                        <div className="howto-Card">
                    <h1>{howTo.title}</h1>
                    {/* <p>Description: {howTo.description}</p> */}
                    <p>Category: {howTo.category}</p>
                    <p>Difficulty: {howTo.difficulty}</p>
                    </div>
                    </NavLink>
                    
                </StyledHowToDiv>
                
                
                    
           ))}
        </div>
    )
}

export default HowToList;