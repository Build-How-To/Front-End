import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddReviewForm = () =>{

    const submitForm = e => {
        e.preventDefault();

    //     axiosWithAuth()
    //       .post(`/guides/${id}/reviews`,)
    //       .then(res => {
    //           console.log('response from submitting a review', res)

    //       })
    //       .catch(err => console.log(err));
    };

    return(
        <div>
            <form onSubmit={submitForm}>
                <h3>Add review</h3>
                <input
                    id="review"
                    type="text"
                    name="review"
                    placeholder="review"
                />
            </form>
            <div>
                <button>Submit</button>
                <button>Cancel</button>
            </div>
        </div>
    )//return
}//AddReviewForm

export default AddReviewForm;