import React, { Component } from 'react';
import './index.css';

class LoginSignup extends Component {
	constructor() {
		super();
    	this.state = {
    		loginUser: '',
    		loginPw: '',
    		signupUser: '',
    		signupPw: '',
    	};
    }

	render(){
		return(
			<div className='login-signup'>
				<div className='login'>
					<h1>Login</h1>
					<p>Get back to business!</p>
        			<form onSubmit={this.handleLoginSubmit} ref='loginForm'>
        				Username: <input
            				type='text'
            				onChange={this.handleLoginUserChange}
                    ref='username'
            				required
          				/><br />
          				Password: <input
            				type='text'
            				onChange={this.handleLoginPwChange}
                    ref='password'
            				required
          				/><br />
          				<input 
            				type='submit'
            				value='Log in'
          				/><br />
        			</form>
				</div>
				<div className='signup'>
					<h1>Sign up</h1>
					<p>Register your e-commerce shops with Cart-o-grapher!</p>
        			<form onSubmit={this.handleSignupSubmit} ref='loginForm'>
        				Username: <input
            				type='text'
            				onChange={this.handleSignupUserChange}
                    ref='username'
            				required
          				/><br />
          				Password: <input
            				type='text'
            				onChange={this.handleSignupPwChange}
                    ref='password'
            				required
          				/><br />
          				<input 
            				type='submit'
            				value='Sign up'
          				/><br />
        			</form>
				</div>
			</div>
		)
  	}

  	handleLoginUserChange = (event) => {
    	this.setState({ loginUser: event.target.value });
  	}

  	handleLoginPwChange = (event) => {
    	this.setState({ loginPw: event.target.value });
  	}

  	handleSignupUserChange = (event) => {
    	this.setState({ signupUser: event.target.value });
  	}

  	handleSignupPwChange = (event) => {
    	this.setState({ signupPw: event.target.value });
  	}

  	handleLoginSubmit = (event) => {
    	event.preventDefault();
      let data = {
        username: this.refs.username.value,
        password: this.refs.password.value
      };
      var request = new Request('https://localhost:3232/api', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
      })
      fetch(request)
      .then(res => res.json())
      .then(data => console.log(data));
    }

    handleSignupSubmit = (event) => {
    	event.preventDefault();
    }
}

export default LoginSignup;
