import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router';
 
import  { HowToContext } from '../../contexts/HowToContext';
import axiosWithAuth from '../../utils/axiosWithAuth';

const HowToCard = props =>{
    let history = useHistory();
    const handleClick = e => {
        e.preventDefault()
        history.push(`/updatehowtoform/${id}`)
    }
    
    const { id } = useParams();
  
    const { howToList } = useContext(HowToContext)
    console.log('HowToCard card', howToList)
    console.log('this is the id i need', id)
    const guide =howToList.find(
        thing => `${thing.id}`===id
    );
    if(!howToList.length || !guide) {
        return <h2>Loading item data...</h2>
    }

    
    
    return (
        <div>
            <h2 className="howto-list-title">{guide.title}</h2>
            <h2>Description:{guide.description}</h2>
             <button onClick={handleClick}>Edit</button>      
             <button onClick={handleClick}>Delete</button> 
              
        </div>
    )
}

export default HowToCard;