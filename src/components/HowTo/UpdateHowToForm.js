// import React, { useState,  useEffect } from 'react';
// import { useParams } from 'react-router';

// import styled from 'styled-components';
// import axiosWithAuth from '../../utils/axiosWithAuth';

// const initialItem = {
//     title:'',
//     description: ''
// }


// const UpdateHowToForm = props => {
//     const [item, setItem] =useState(initialItem);
//     const { id } = useParams();
//     console.log("The Props Obj:", props)

//     useEffect(() => {
//         const itemToUpdate = props.items.find(thing => `${thing.id}`===id);
//         if (itemToUpdate) {
//             setItem(itemToUpdate);
//         }
//     }, [props.items, id]);

//     const changeHandler = ev => {
//         ev.persist();
//         let value =ev.target.value;
//         setItem({
//             ...item,
//             [ev.target.name]:value
//         });
//     }


// const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//     .put(`/guides/${id}`, item)
//     .then(res => {
//         console.log('debug2', res)
//         props.setItems(res.data);
//         // props.history.push(`howtolist/:${id}`);

//     })
//     .catch(err => console.log(err));
// };
    

// return (
//     <div>
//     <form onSubmit= {handleSubmit}>
//         <label htmlFor='title'>Title</label>
//         <input
//         id='title'
//         name='title'
//         type='text'
//         onChange={changeHandler}
//         placeholder="title"
//         // value={props.howTo.title}
//     />
//     <label htmlFor='description'>Description</label>
//         <input
//         id='description'
//         name='description'
//         type='text'
//         onChange={changeHandler}
//         placeholder="description"
//         // value={props.howTo.description}
//     />
//         <button type='submit'>Update</button>
//     </form>
//     </div>
// )
// }

// export default UpdateHowToForm;