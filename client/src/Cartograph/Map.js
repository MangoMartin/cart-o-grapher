// import React, { Component } from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
// import DivIcon from 'react-leaflet-div-icon';
// import 'leaflet/dist/leaflet.css';
// import './index.css';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import Markers from './marker.js';

// class MapContainer extends Component {
//   constructor(){
//     super();
     
//   }

// 	render(){
    
//         const provider = new OpenStreetMapProvider();

//         const searchControl = new GeoSearchControl({
//           provider : provider,
//           style: 'button',
//           autoClose: true,
//           keepResult: true,
//           maxMarker: 3
//         });

//         const map = L.map('map', { zoom: 5})
//                      .addControl(searchControl)
//                      .setView([51.505, -0.09], 13);

//           L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           }).addTo(map);

//           for (var i = 0; i < Markers.length; i++){
//           L.marker([Markers[i].lat, Markers[i].lng]).addTo(map)
//             .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//             .openPopup();
//           }
//           provider.search({query: Markers[1]}).then(function(result){console.log(result)});
//     	return(
        
//           <div className="map">
//           <Map
//             center={position}
//             zoom={15}
//           >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker
//             position={position}
//             >
//             <Popup>
//               <span>
//               My store is here.<br />Check it out.
//               </span>
//             </Popup>
//           </Marker>
//         </Map>
//         </div>
//    		)
//   	}
// }

// export default MapContainer;
import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import Markers from './marker.js';

class MapContainer extends Component {
  constructor(){
    super();
  }

  render(){
        const provider = new OpenStreetMapProvider();

        const searchControl = new GeoSearchControl({
          provider : provider,
          style: 'button',
          autoClose: true,
          keepResult: true,
          maxMarker: 3
        });

        const map = L.map('map', { zoom: 5})
                     .addControl(searchControl)
                     .setView([51.505, -0.09], 13);

          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          for (var i = 0; i < Markers.length; i++){
          L.marker([Markers[i].lat, Markers[i].lng]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
          }
          provider.search({query: Markers[1]}).then(function(result){console.log(result)});
      return(
        <div>

        </div>
      )
    }
}

export default MapContainer;