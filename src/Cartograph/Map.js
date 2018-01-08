import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
import Markers from './marker.js';

class MapContainer extends Component {
  constructor(){
    super();
  }

	render(){
        const provider = new OpenStreetMapProvider();
        provider.search({query: '401 East 60th Street'})
                .then(function(result){
                  console.log(result)
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
          //provider.search({query: Markers[1]}).then(function(result){console.log(result)});
    	return(
        <div>
        </div>
   		)
  	}
}

export default MapContainer;
