import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { users: [],
            fetched: []
   }

  componentDidMount(){
    fetch('/users')
        .then( res => res.json())
        .then(users => this.setState({ users }))
  }

  componentDidMount(){
    fetch('fetchme')
        .then(res => res.json())
        .then(fetched => this.setState({ fetched }))
  }

  render() {
    return (
      <div className="App">
        <h1>User Log</h1>
        <ul>
          {this.state.fetched.map(user =>
            <li key={user.login}>{user.password}</li>
          )}
        </ul>
        <form method='POST' action='/form'>
          <input type='text' name='username' placeholder='type username here' />
          <input type='text' name='password' placeholder='type password here' />
          <input type='submit' value='Log in' />
        </form>
      </div>
    );
  }
}

export default App;
