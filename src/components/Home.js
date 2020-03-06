import React, { useContext } from 'react';
import styled from 'styled-components';
import  { HowToContext } from '../contexts/HowToContext';
import { withRouter } from 'react-router-dom'


const StyledButton = styled.button`
position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 8px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #fff;
  background-color: #1c5d76;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
    -apple-system;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
`
const StyledHomeDiv = styled.div`
  height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`


function Home(props) {
  const { howToList } =useContext(HowToContext)
  const routeToList = event => {
    event.preventDefault();
    console.log('here is the props',props)
    props.history.push('/howtolist');
  };

  return (
    <StyledHomeDiv>
     
      <StyledButton onClick={routeToList} className="md-button list-button">
        Find a howTo!
      </StyledButton>
    </StyledHomeDiv>
  );
}

export default withRouter(Home);






// import React from 'react';
// import { Link } from 'react-router-dom';


// const Home =(props) =>{
    
//     const routeToHowTo = event => {
//         event.preventDefault();
//         props.history.push('/howtolist');
//     };
//     return(
//         <div className="home-wrapper">
//             <Link to ="/howtolist">Welcome to howTo!</Link>
            
//         </div>
//     )
// }
// export default Home;