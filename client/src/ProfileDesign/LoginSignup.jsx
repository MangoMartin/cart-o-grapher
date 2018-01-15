import React, { Component } from 'react';
import './index.css';

class LoginSignup extends Component {
 constructor() {
    super();
  }
  render() {
    return (
      <form method='POST' action='http://localhost:3232/api/signup' encType='application/x-www-form-urlencoded'>
        <input type="text" placeholder="Username" ref="username" name="username"/>
        <input type="text" placeholder="Password" ref="password" name="password"/>
        <input type="submit" />
      </form>
    );
  }
}

export default LoginSignup;
