import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router';
 
import  { HowToContext } from '../../contexts/HowToContext';
import axiosWithAuth from '../../utils/axiosWithAuth';


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
        <div>
            <h2 className="howto-list-title">{guide.title}</h2>
            <h2>Description:{guide.description}</h2>
             <button onClick={handleEdit}>Edit</button>      
             <button onClick={handleDelete}>Delete</button> 
              
        </div>
    )
}

export default HowToCard;