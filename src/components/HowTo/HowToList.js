import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import  { HowToContext } from '../../contexts/HowToContext';
import styled from 'styled-components';


const StyledHowToDiv = styled.div`
display:flex;
  border: 1 px solid black;
  text-decoration: none;
  align-items: center;
`
const StyledHowToTitle = styled.h2`
font-size:20px;
`
const StyledHowToP = styled.p`
font-size:12px;

`

const HowToList = props =>{
    const { howToList } =useContext(HowToContext)
    console.log('from the howto context', howToList)
    
    return (
        <div className="howto-list-wrapper">
            {howToList.map(howTo => (

                <div key={howTo.id}>
                    <StyledHowToDiv>
                    <NavLink className="howto-Nav"exact to={`/howtocard/${howTo.id}`}>
                       
                    <StyledHowToTitle>{howTo.title}</StyledHowToTitle>
                    {/* <p>Description: {howTo.description}</p> */}
                    <p>Category: {howTo.category}</p>
                    <p>Difficulty: {howTo.difficulty}</p>
                    </NavLink>
                    </StyledHowToDiv>
                    
                </div>    
        
                
                
                    
           ))}
        </div>
    )
}

export default HowToList;