import React, { Component } from 'react';
import './index.css';

class LoginSignup extends Component {
 constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('https://localhost:3000/api/signup', { 
        method: 'post',
       credentials: 'include', //pass cookies, for authentication
  headers: {
  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
        data: {
          username: self.refs.username,
          password: self.refs.password
        }
      })
     .then(res => {
  if(res.status === 200) return res.json();
  else return { error: 'there was an error with response' }

});
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Username" ref="username" name="username" />
        <input type="text" placeholder="Password" ref="password" name="password" />
        <input type="submit" />
      </form>
    );
  }
}

export default LoginSignup;
