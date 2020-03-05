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
      <div className='signup'>
        <form onSubmit={this.signup}>
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
        </form>
      </div>
    );
  }
}

export default Signup;



