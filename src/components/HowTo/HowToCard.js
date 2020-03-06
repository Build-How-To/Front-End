import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router';
 
import  { HowToContext } from '../../contexts/HowToContext';
import axiosWithAuth from '../../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 3% 4%;
`
const StyledButtonsGroup = styled.div`

    margin-top: 5%;

    button{
        border-radius: 4px;
        border: 2px solid #e7e7e7;
        padding: 6px 30px;
        margin-right: 12%;
    }

    button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`

const HowToCard = props =>{
    let history = useHistory();
    const handleEdit = e => {
        e.preventDefault()
        history.push(`/updatehowtoform/${id}`)
    }

    const handleDelete = e => {
        // e.prevent.Default();
        axiosWithAuth()
        .delete (`/guides/${id}`)
        .then(res => {
            props.howTo(res.data);
            props.history.push('/howtolist');
        })
        .catch(err => console.log('error deleting', err));
    }
    
    const { id } = useParams();
  
    const { howToList } = useContext(HowToContext)
    console.log('HowToCard card', howToList)
    console.log('this is the id i need', id)
    const guide =howToList.find(
        thing => `${thing.id}`===id
    );
    if(!howToList.length || !guide) {
        return <p>retrieving the data</p>
    }

    
    
    return (
        <StyledDiv>
            <h2 className="howto-list-title">{guide.title}</h2>
            <h2>Description:{guide.description}</h2>
            <StyledButtonsGroup>
                <button onClick={handleEdit}>Edit</button>      
                <button onClick={handleDelete}>Delete</button>
            </StyledButtonsGroup> 
        </StyledDiv>
    )
}

export default HowToCard;