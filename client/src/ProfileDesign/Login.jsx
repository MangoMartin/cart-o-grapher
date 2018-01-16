import React, { Component } from 'react';
import './index.css';

class Login extends Component {
 constructor() {
    super();
  }
  render() {
    return (
      <div className='login-signup'>
        <div className='login'>
      <form method='POST' action='/api' encType='application/x-www-form-urlencoded'>
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Password" name="password"/>
        <input type="submit" value="Log In" />
      </form>
      </div>
      </div>
    );
  }
}

export default Login;
