import React, { Component } from 'react';
import './index.css';

class LoginSignup extends Component {
 constructor() {
    super();
  }
  render() {
    return (
      <div className='login-signup'>
        <div className='login'>
      <form method='POST' action='/api/signup' encType='application/x-www-form-urlencoded'>
        <input type="text" placeholder="Username" ref="username" name="username"/>
        <input type="text" placeholder="Password" ref="password" name="password"/>
        <input type="submit" value="Sign Up" />
      </form>
      </div>
      <div className='signup'>
      <form method='POST' action='/api' encType='application/x-www-form-urlencoded'>
        <input type="text" placeholder="Username" ref="username" name="username"/>
        <input type="text" placeholder="Password" ref="password" name="password"/>
        <input type="submit" value="Log In" />
      </form>
      </div>
      </div>
    );
  }
}

export default LoginSignup;
