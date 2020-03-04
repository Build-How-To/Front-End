import React, { useContext } from 'react';
import { HowToFormContext } from '../contexts/HowToFormContext';
import styled from 'styled-components';

const HowToform = styled.form `
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
align-items: center;
max-width: 100%;
flex-direction: column;
width:300px; 
height: 350px;
padding: 30px;
`
const HowTolabel = styled.label `
padding: 10px;
text-align: left;
`

const HowToinput = styled.input `
padding: 10px;
margin: 10px;
`

const HowTobutton = styled.button `
padding: 10px;
margin: 20px;
`
const HowToForm = props => {
    const {handleChanges, submitForm, howTo} useContext{HowToFormContext}
}

return (
    <HowToform onSubmit= {submitForm}>

    </HowToform>
)
