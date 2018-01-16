import React, { Component } from 'react';
import './App.css';
import L from 'leaflet';
import {Control} from 'leaflet-control-geocoder';

const map = L.map('map', { zoom: 5})
             .setView([51.505, -0.09], 13);
  console.log('ZUPZUPZUP',this.map)

class App extends Component {

  constructor(){
    super()

    this.state = {
      users: [],
      fetched: [],

      }

     this.loadMap = this.loadMap.bind(this);
    // this.renderDiv = this.renderDiv.bind(this)
    }

  render() {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log(this.state.fetched)
    /*for (let i = 0; i<this.state.addresses.length; i++){
    new L.Control.Geocoder.Nominatim().geocode(this.state.addresses[i], (res)=>{

      console.log(res[0].name, res[0].center.lat, res[0].center.lng)
    //  for (var i = 0; i < Markers.length; i++){
        L.marker([res[i].center.lat, res[i].center.lng]).addTo(map)
        .bindPopup('hallo')
        .openPopup()
    })}*/


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
          <input type='text' name='address' placeholder='type password here' />
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
    componentDidMount(){
      fetch('/fetchme')
          .then( res => res.json())
          .then(fetched => this.setState({ fetched }))
        //  window.map.loadMap();
    }

    loadMap(){
      console.log('3')
      window.map.remove()
    }
}

export default App;
