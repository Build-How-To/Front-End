import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';


const LoginDiv = styled.div`
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

const LoginForm = styled.form`
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


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // Make a POST request and send the credentials object to the api
    axiosWithAuth()
      .post('/auth/login', this.state.credentials)
      .then(res => {
          console.log('response', res)
        window.localStorage.setItem('token', res.data.token);
        // navigate the user to /protected (whatever landing page)
        this.props.history.push('/home');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <LoginDiv>
        <LoginForm onSubmit={this.login}>
          <label htmlFor='username'>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            
          />
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </LoginForm>
      </LoginDiv>
    );
  }
}

export default Login;



