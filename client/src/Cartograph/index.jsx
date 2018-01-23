import React, { Component } from 'react';
import MappedShops from './LocalShops';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Control, Popup } from 'leaflet-control-geocoder';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import $ from 'jquery';
import './index.css';

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
  //console.log('ZUPZUPZUP',this.map);

export default class Home extends Component {

  
  constructor(props){
    super(props)

    this.state = {
      users: [],
      fetched: [{id:1, address:'291 Misenas street san antonio cavite city'}],
      idsFromFetched: [],
      currentID: 0
    }
    // this.loadMap = this.loadMap.bind(this);
    // this.renderDiv = this.renderDiv.bind(this)
    this.clickMe = this.clickMe.bind(this);
    }

  render() {

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
      .addTo(map);
    console.log(this.state.fetched)
    for(let i = 0; i<this.state.fetched.length; i++){
      this.state.idsFromFetched.push(this.state.fetched[i].id)
    }
    //console.log(this.state.idsFromFetched)

    let markers = {};
    if(this.state.fetched.length > 1){
      for (let i = 0; i<this.state.fetched.length; i++){
        let person = this.state.fetched[i];
      //  console.log(this.state.fetched[1])
        //console.log(markers)
        new L.Control.Geocoder.Nominatim().geocode(this.state.fetched[i].address, (res)=>{
        console.log(res[0].name, res[0].center.lat, res[0].center.lng)
      //  for (var i = 0; i < Markers.length; i++){
      markers[person.id] = L.marker([res[0].center.lat, res[0].center.lng]).addTo(map).on('click', (e)=>{

            console.log('marker: ' + markers[person.id]._icon.id)
            this.setState({currentID: markers[person.id]._icon.id})
            console.log('currentID:', this.state.currentID)
      })
                              .bindPopup(`${this.state.fetched[i].shop_name}<br>
                                          ${this.state.fetched[i].address}<br>
                                          ${this.state.fetched[i].createdAt}<br>`)
                              .openPopup()
                            //  markers[person.id].setContent(<p>hello</p>)
        markers[person.id]._icon.id = person.id-1;
        //console.log('1',markers[person.id]._icon.id)
        //console.log('2',markers)
    })}}


    return(
      <div className="App">
        <h1>Cartographer</h1>
          <div id='map'></div>
        <h1 key={this.state.fetched[this.state.currentID].id}>{this.state.fetched[this.state.currentID].address}</h1>
      </div>
    );
  }

     componentDidMount(){
      fetch('/home')
          .then( res => res.json())
          .then(fetched => this.setState({ fetched }))
        //  window.map.loadMap();
    }

   clickMe(){
      alert('you clicked marker:')
    }


}


// import React, { Component } from 'react';
// import './App.css';
// import L from 'leaflet';
// import {Control, Popup} from 'leaflet-control-geocoder';
// import $ from 'jquery';


// const provider = new OpenStreetMapProvider();

//     const searchControl = new GeoSearchControl({
//       provider : provider,
//       style: 'button',
//       autoClose: true,
//       keepResult: true,
//       maxMarker: 3
//     });
// const map = L.map('map', { zoom: 5})
//              .addControl(searchControl)
//              .setView([51.505, -0.09], 13);
//   //console.log('ZUPZUPZUP',this.map)

// class App extends Component {

//     /*$('.leaflet-marker-icon').on('click', function(e) {
//    // Use the event to find the clicked element
//    var el = $(e.srcElement || e.target),
//        id = el.attr('id');

//     alert('Here is the markers ID: ' + id + '. Use it as you wish. Hit ok and watch the map.');
//     map.panTo( this.state.markers[id].getLatLng() );
//   })*/

//     return (
//       <div className="App">
//         <h1>Cartographer</h1>
//         <ul>
//           {this.state.users.map(user =>
//             <li key={user.id}>{user.name}</li>
//           )}
//         </ul>
//         <ul>
//           {this.state.fetched.map(info =>
//             <li key={info.shopName}>{info.product}</li>
//           )}
//         </ul>
//         <form method='POST' action='/form'>
//           <input type='text' name='shopName' placeholder='type shopName here' />
//           <input type='text' name='aboutShop' placeholder='type something about your shop here' />
//           <input type='text' name='address' placeholder='type address here' />
//           <input type='text' name='contactDetail' placeholder='contact details here' />
//           <input type='text' name='product' placeholder='type product here' />
//           <input type='text' name='price' placeholder='type price here' />
//           <input type='text' name='quantity' placeholder='type quantity here' />
//           <input type='submit' value='Create Shop' />
//         </form>
//         <div id='map'></div>
//         <h1 key={this.state.fetched[this.state.currentID].id}>{this.state.fetched[this.state.currentID].address}</h1>
//       </div>
//     );
//   }
// /*  loadMap(){
//     let mymap;
//     if(mymap !== undefined || mymap != null) {
//       mymap.remove()
//     }
//     else{*/
//     componentDidMount(){
//       fetch('/home')
//           .then( res => res.json())
//           .then(fetched => this.setState({ fetched }))
//         //  window.map.loadMap();
//     }

//    clickMe(){
//       alert('you clicked marker:')
//     }


// }
