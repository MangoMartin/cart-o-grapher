import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Signup extends Component {
  render() {
    return (
      <div className='login-signup'>
        <h1>Sign up</h1>
        <div className='signup'>
          <form method='POST' action='http://localhost:3232/api/signup' encType='application/x-www-form-urlencoded'>
            <input type="text" placeholder="Username" name="username"/>
            <input type="text" placeholder="Password" name="password"/>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
        <Link to='/api'>
          Already own a store?
        </Link>
      </div>
    );
  }
}

export default Signup;
