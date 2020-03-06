import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import  { HowToContext } from '../../contexts/HowToContext';
import styled from 'styled-components';


const StyledHowToDiv = styled.div`
    width: 50%;
    background-color: #1c5d76;
    display: flex;
    border: 1px solid black;
    text-decoration: none;
    align-items: center;
    justify-content: space-around;
    margin: 3% 0;

    h2{
        font-size: 2rem;
    }

    p{
        font-size:1.8rem
    }
`

const StyledListWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`

const HowToList = props =>{
    const { howToList } =useContext(HowToContext)
    // console.log('from the howto context', howToList)
    
    return (
        <StyledListWrapper>
            {howToList.map(howTo => (

                <StyledHowToDiv key={howTo.id}>
                    <NavLink className="howto-Nav"exact to={`/howtocard/${howTo.id}`}>
                       
                    <h2>{howTo.title}</h2>
                    {/* <p>Description: {howTo.description}</p> */}
                    <p>Category: {howTo.category}</p>
                    <p>Difficulty: {howTo.difficulty}</p>
                    </NavLink>
                    
                </StyledHowToDiv>       
           ))}
        </StyledListWrapper>
    )
}

export default HowToList;