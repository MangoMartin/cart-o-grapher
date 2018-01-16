import React, { Component } from 'react';
import './index.css';

class Signup extends Component {
 constructor() {
    super();
  }
  render() {
    return (
      <div className='login-signup'>
      <div className='signup'>
      <form method='POST' action='/api/signup' encType='application/x-www-form-urlencoded'>
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Password" name="password"/>
        <input type="submit" value="Sign Up" />
      </form>
      </div>
      </div>
    );
  }
}

export default Signup;
