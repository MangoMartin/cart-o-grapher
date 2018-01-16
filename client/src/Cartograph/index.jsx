import React, { Component } from 'react';
import MappedShops from './LocalShops';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {Control, Popup} from 'leaflet-control-geocoder';
import $ from 'jquery';
import Markers from './marker.js';
import './index.css';

const map = L.map('map', { zoom: 5, minZoom: 2})
                     .addControl(searchControl)
                     .setView([51.505, -0.09], 13);

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [],
      addresses: [],
      fetched: [{id:1, address:'291 Misenas street san antonio cavite city'}],
      idsFromFetched: [],
      currentID: 0
    }
     this.clickMe = this.clickMe.bind(this);
    
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

         
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    noWrap: true,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log(this.state.fetched)
    for(let i = 0; i<this.state.fetched.length; i++){
      this.state.idsFromFetched.push(this.state.fetched[i].id)
    }
    //console.log(this.state.idsFromFetched)

    let markers = {};
    if(this.state.fetched.length > 1){
      for (let i = 0; i<this.state.fetched.length; i++){
        let business = this.state.fetched[i];
         new L.Control.Geocoder.Nominatim().geocode(business.address + business.city + business.state + business.zip + business.country, (res)=>{
        console.log(res[0].name, res[0].center.lat, res[0].center.lng)
      //  for (var i = 0; i < Markers.length; i++){
      markers[business.id] = L.marker([res[0].center.lat, res[0].center.lng]).addTo(map).on('click', (e)=>{

            console.log('marker: ' + markers[business.id]._icon.id)
            this.setState({currentID: markers[business.id]._icon.id})
            console.log('currentID:', this.state.currentID)
      })
                              .bindPopup(`${this.state.fetched[i].shop_name}<br>
                                          ${this.state.fetched[i].address}<br>
                                          ${this.state.fetched[i].city}<br>
                                          ${this.state.fetched[i].state}<br>
                                          ${this.state.fetched[i].about}<br>
                                          <a href='http://www.google.com'>Google</a>`)
                              .openPopup()
                            //  markers[person.id].setContent(<p>hello</p>)
        markers[business.id]._icon.id = business.id;
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
            <h1 key={this.state.fetched[this.state.currentID].id}>{this.state.fetched[this.state.currentID].address}</h1>
            </div>
      		<div id='map'>
      		</div>
      	</div>
      	<MappedShops
      	/>
      </div>
    )
  }
   componentDidMount(){
      fetch('/')
          .then(res => res.json())
          .then(fetched => this.setState({ fetched }))
        //  window.map.loadMap();
    }

    clickMe(){
      alert('you clicked marker:')
    }

}
