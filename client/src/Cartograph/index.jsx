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
             .setView([40.7079924, -74.0063203], 13);
  //console.log('ZUPZUPZUP',this.map);

export default class Home extends Component {

  
  constructor(props){
    super(props)

    this.state = {
      users: [],
      fetched: [{id:9, address:'163 William Street', city:'New York', state: 'NY', zip: '10038'}],
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

  let MarkerIcon = L.Icon.extend({
    options: {
      shadowUrl: 'logo.png',
      iconSize:     [38, 95],
      shadowSize:   [0, 0],
      iconAnchor:   [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor:  [-3, -76]
    }
  });

  let logoIcon = new MarkerIcon({iconUrl: 'logo.jpg'});

  
    let markers = {};
    if(this.state.fetched.length > 1){
      for (let i = 0; i<this.state.fetched.length; i++){
        let person = this.state.fetched[i];
        let fulladdress = this.state.fetched[i].address + ", " + this.state.fetched[i].city + ", " + this.state.fetched[i].state + ", " +  this.state.fetched[i].zip;
        console.log(fulladdress);
        new L.Control.Geocoder.Nominatim().geocode(fulladdress, (res)=>{
        console.log(res[0].center.lat, res[0].center.lng)
      //  for (var i = 0; i < Markers.length; i++){
      markers[person.id] = L.marker([res[0].center.lat, res[0].center.lng], {icon: logoIcon})).bindPopup(`${this.state.fetched[i].shop_name}<br>
                                          ${this.state.fetched[i].address}<br>
                                          ${this.state.fetched[i].city}<span>, </span>${this.state.fetched[i].state}<br>
                                          ${this.state.fetched[i].zip}<br>
                                          ${this.state.fetched[i].createdAt}<br>`).addTo(map).on('mouseover', (e)=>{

            this.openPopup();
      }).on('mouseout', function (e) {
            this.closePopup()
        
                            //  markers[person.id].setContent(<p>hello</p>)
        // markers[person.id]._icon.id = person.id-1;
        //console.log('1',markers[person.id]._icon.id)
        //console.log('2',markers)
    })}}
 

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
            <h3 id='address' key={this.state.fetched[this.state.currentID].id}>{this.state.fetched[this.state.currentID].address}</h3>
            </div>
          <div id='map'>
          </div>
        </div>
      </div>
    )
  }

     componentDidMount(){
      fetch('/home')
          .then(res => res.json())
          .then(fetched => this.setState({ fetched }))
        //  window.map.loadMap();
    }

   clickMe(){
      alert('you clicked marker:')
    }


}

//shop_name: 'Cheese and bits', city: ''