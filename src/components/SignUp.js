import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';





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
      <div>
        <form onSubmit={this.signup}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="first_name"
            value={this.state.credentials.first_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="last_name"
            value={this.state.credentials.last_name}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Signup;



