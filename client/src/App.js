import React, { Component } from 'react';
import './App.css';
import Maps from './map.js';

class App extends Component {

  constructor(){
    super()

    this.state = {
      users: [],
      fetched: []
    }
  }

  componentDidMount(){
    fetch('/users')
        .then( res => res.json())
        .then(users => this.setState({ users }))
    fetch('/fetchme')
        .then( res => res.json())
        .then(fetched => this.setState({ fetched }))
  }

  render() {
    {console.log(this.state.users)}
    {console.log(this.state.fetched)}

    return (
      <div className="App">
        <h1>User Log</h1>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.name}</li>
          )}
        </ul>
        <ul>
          {this.state.fetched.map(info =>
            <li key={info.username}>{info.password}</li>
          )}
        </ul>
        <form method='POST' action='/form'>
          <input type='text' name='username' placeholder='type username here' />
          <input type='text' name='password' placeholder='type password here' />
          <input type='submit' value='Log in' />
        </form>
      </div>
      <Maps />
    );
  }
}

export default App;
