import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { users: [] }

  componentDidMount(){
    fetch('/users')
        .then( res => res.json())
        .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div className="App">
        <h1>User Log</h1>
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>{user.name}</li>
          )}   
        </ul>
      </div>
    );
  }
}

export default App;
