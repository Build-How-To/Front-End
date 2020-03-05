import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { HowToFormContext } from '../../contexts/HowToFormContext';
import styled from 'styled-components';
import axiosWithAuth from '../../utils/axiosWithAuth';




const UpdateHowToForm = props => {
//     const {howToList, setHowToList} = useContext(HowToFormContext)

//     const [howTo, setHowTo] = useState({
//         title:'',
//         description: '',
//         category: '',
//         difficulty:'',
//         creator_user_id:'',
//         tries: ''
//       });

//       const { id } = useParams()

//       useEffect(() => {
//           const itemToUpdate = howToList.find(thing => `${thing.id}` ===id);
//           if (itemToUpdate) {
//               setHowToList(itemtoUpdate);
//           } 
//       }, [howToList, id]);

//       const changeHandler = ev => {
//           ev.persist();
//           let value = ev.target.value;
//       }

//       setHowToList({
//           ...howToList, [ev.target.name]: value
//       })

//       const handleSubmit = e => {
//           e.preventDefault();
//           axiosWithAuth()
//           .put(`http://localhost.333/items/${id}`, item)
//           .then(res => {
//               setHowToList(res.data);
//               props.history.push(`howtolist/${id}`);
//           })
//           .catch(err => console.log('error updating howTo', err))
          

//       }
return (
    <h1>Hello</h1>
//     <form onSubmit= {handleSubmit}>
//         <label htmlFor='title'>Title</label>
//         <input
//         id='title'
//         name='title'
//         type='text'
//         onChange={changeHandler}
//         placeholder="title"
//         value={howTo.title}
//     />
// <button type='submit'>Add HowTo</button>
//     </form>
)
}

export default UpdateHowToForm;