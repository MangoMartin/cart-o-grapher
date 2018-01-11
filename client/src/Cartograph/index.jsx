import React, { Component } from 'react';
import MappedShops from './LocalShops';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import Markers from './marker.js';
import './index.css';

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      tests: [],
      addresses: []
    };
  }

  render(){
    const provider = new OpenStreetMapProvider();
        provider.search({query: '401 East 60th Street'})
                .then(function(result){
                  console.log(result);
                })
        const searchControl = new GeoSearchControl({
          provider : provider,
          style: 'button',
          autoClose: true,
          keepResult: true,
          maxMarker: 3
        });

         const map = L.map('map', { zoom: 5, minZoom: 2})
                     .addControl(searchControl)
                     .setView([51.505, -0.09], 13);

          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            noWrap: true,
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          for (var i = 0; i < Markers.length; i++){
          L.marker([Markers[i].lat, Markers[i].lng]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
          }
    const { tests } = this.state;
    return(
      <div className='main-body'>
      	<div className='top'>
      		<div className='aboutCoG'>
            <p className='about-text'> Cart-o-grapher allows you to bypass the hassle of shipping
            by locating nearby inventories of your favorite e-commerce shops,
            such as: Amazon, Etsy, Ebay, and more. Just enter in a location below to
            view nearby stores located on the map and their respective store profiles
            below.
            </p>
            {tests.map((test) =>
              <div key={test.username}>
                {test.username}
              </div>
            )}
      		</div>
      		<div id='map'>
      		</div>
      	</div>
      	<MappedShops
      	/>
      </div>
    )
  }
  
  componentDidMount() {
    this.getTest();
  }

  getTest() {
    fetch('/api/tests')
      .then(res => res.json())
      .then(tests => this.setState({ tests }));
  }
}
