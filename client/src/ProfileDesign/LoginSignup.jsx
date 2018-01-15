import React, { Component } from 'react';
import './index.css';

class LoginSignup extends Component {
 constructor() {
    super();
  }
componentDidMount() {
    this.onSubmit();
  }
onSubmit = (evt) => {
    evt.preventDefault();
    fetch('/api/singup');
  }

  render() {
    return (
      <form method='POST' encType='application/x-www-form-urlencoded' onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Username" ref="username" name="username"/>
        <input type="text" placeholder="Password" ref="password" name="password"/>
        <input type="submit" />
      </form>
    );
  }
}

export default LoginSignup;
