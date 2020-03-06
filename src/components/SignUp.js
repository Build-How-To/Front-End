import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledDiv = styled.div`
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

const StyledForm = styled.form`
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



class Signup extends React.Component {
  
  state = {
    credentials: {
      username: '',
      password: '',
      email:'',
      first_name:'',
      last_name:''
    }
  };

  handleChange = e => {
    console.log('e',e)
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
 
  signup = e => {
    e.preventDefault();
    // Make a POST request and send the credentials object to the api
    axiosWithAuth()
      .post('/auth/register', this.state.credentials)
      .then(res => {
          console.log('response from signup', res)
        //window.localStorage.setItem('token', res.data.token);
        // navigate the user to /protected (whatever landing page)
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };
  
  render() {
    console.log("State:", this.state.credentials)
    return (
         <StyledDiv>
          <h2>Sign Up</h2>
          <StyledForm onSubmit={this.signup}>
          <label htmlFor='username'>User Name</label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder='User Name'
            />
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
              placeholder='Email'
            />
            <label htmlFor='fnameInput'>First Name</label>
            <input
              type="text"
              name="first_name"
              value={this.state.credentials.first_name}
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <label htmlFor='lnameInput'>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={this.state.credentials.last_name}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
            <button>Sign Up</button>
          </StyledForm>
          </StyledDiv>
    );
  }
}

export default Signup;



