import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';
import DivIcon from 'react-leaflet-div-icon';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Maps extends Component {
  constructor(){
    super();
    this.state={
      lat : 14.599512,
      long : 120.984222
    }
  }

  render(){
    const position = [this.state.lat, this.state.long];
    return(
        <Map
            center={position}
            zoom={0}
          >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={position}
            >
            <Popup>
              <span>
              My store is here.<br />Check it out.
              </span>
            </Popup>
          </Marker>
        </Map>
    )
      }
    }
export default Maps;
