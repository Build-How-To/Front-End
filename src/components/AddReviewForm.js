import React, { useContext, useParams, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import  { HowToContext } from '../contexts/HowToContext';
import styled from 'styled-components';

import { axiosWithAuth } from '../utils/axiosWithAuth';


const ReviewForm = styled.form`
  width: 30%;
  background: Gainsboro;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  padding: 0.6%;

  label{

  }

  input{
    width: 100%;
    margin:5% 10%;
    margin-top:0;
  }

  input[type=text]:focus {
    background-color: lue;
  }
`
const ReviewDiv = styled.div`
  width: 100%;
  margin: 2% 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content:center;

  h2{
    text-align:center;
  }
`


const AddReviewForm = (props) =>{
    const { howToList } =useContext(HowToContext)
    // const id  = useParams();
    const [item, setItem] = useState({});
    
    const changeHandler = ev => {
        ev.persist();
        let value =ev.target.value;
        setItem({
            ...item,
            [ev.target.name]:value
        });
    }

    const submitForm = e => {
        e.preventDefault();

        axiosWithAuth()
          .post('/guides/1/reviews',{"review":item.review, "author_user_id":item.author_user_id}

          )
          .then(res => {
              alert('thank you!')
              console.log('response from submitting a review', res)

          })
          .catch(err => console.log(err));
    };

    return(
        <ReviewDiv>
            <ReviewForm onSubmit={submitForm}>
                <h3>Add review</h3>
                <input
                    id="review"
                    type="text"
                    name="review"
                    placeholder="submit review"
                    onChange={changeHandler}
                />
                <button type='submit'>Submit</button>
            </ReviewForm>
        </ReviewDiv>
    )//return
}//AddReviewForm

export default AddReviewForm;