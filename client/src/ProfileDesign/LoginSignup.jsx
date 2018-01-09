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
        			<form onSubmit={this.handleLoginSubmit}>
        				Username: <input
            				type='text'
            				onChange={this.handleLoginUserChange}
            				required
          				/><br />
          				Password: <input
            				type='text'
            				onChange={this.handleLoginPwChange}
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
        			<form onSubmit={this.handleSignupSubmit}>
        				Username: <input
            				type='text'
            				onChange={this.handleSignupUserChange}
            				required
          				/><br />
          				Password: <input
            				type='text'
            				onChange={this.handleSignupPwChange}
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
    }

    handleSignupSubmit = (event) => {
    	event.preventDefault();
    }
}

export default LoginSignup;
