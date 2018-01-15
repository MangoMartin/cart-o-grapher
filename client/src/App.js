import React, { Component } from 'react';
import './App.css';
import L from 'leaflet';

class App extends Component {

  constructor(){
    super()

    this.state = {
      users: [],
      fetched: [],
      mapRendered: true
      }

     this.loadMap = this.loadMap.bind(this);
    // this.renderDiv = this.renderDiv.bind(this)
    }

  componentDidMount(){
    fetch('/fetchme')
        .then( res => res.json())
        .then(fetched => this.setState({ fetched }))



      console.log('2',window.map)
  }

  render() {

    if(this.map != undefined || this.map != null){
      this.loadMap()
    }else {
    const map = L.map('map', { zoom: 5})
                 .setView([51.505, -0.09], 13);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      console.log('1',window.map)
}
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
        <div id='map'></div>
      </div>
    );
  }
/*  loadMap(){
    let mymap;
    if(mymap !== undefined || mymap != null) {
      mymap.remove()
    }
    else{*/
    loadMap(){
      console.log('3')
      window.map.remove()
    }
}

export default App;
