import React, { useContext } from 'react';
import { useParams } from 'react-router';

import  { HowToContext } from '../../contexts/HowToContext';
import axiosWithAuth from '../../utils/axiosWithAuth';

const HowToCard =props =>{
    const { id } = useParams();
    const { howToList } =useContext(HowToContext)
    console.log('HowToCard card', howToList)
    console.log('this is the id i need', id)
    const guide =howToList.find(
        thing => `${thing.id}`===id
    );
    if(!howToList.length || !guide) {
        return <h2>Loading item data...</h2>
    }
    
    // useEffect(()=> {
    //     axiosWithAuth()
    //     .get('/')
    //     .then
    //     .catch
    // })
    return (
        <div>
            <h2>Title:{guide.title}</h2>
            <h2>Description:{guide.description}</h2>
             <button>Edit</button>      
             <button>Delete</button> 
        
        </div>
    )
}

export default HowToCard;