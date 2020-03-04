import React from 'react';
import { Link }from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv =styled.div `
diplay:flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
align-items: center;
max-width:100%;
flex-direction: column;
width: 100%;
padding: 10px;
`
const HeaderNav = styled.nav `
display:flex;
align-items:center;
justify-content: space-between;
margin-bottom: 30px;
align-items: center;
max-width: 100%
width: 50%;
padding: 10px;
`

const Header = props => {
    return(
        <HeaderDiv>
            <h1>Welcome to howTo</h1>
            <HeaderNav>
            <Link to='/addhowto'>Add a howTo</Link>
            </HeaderNav>
        </HeaderDiv>
    );
};
export default Header;