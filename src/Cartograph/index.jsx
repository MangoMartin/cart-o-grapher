import React, { Component } from 'react';
import MappedShops from './LocalShops';
import Markers from './marker.js';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Control, Popup } from 'leaflet-control-geocoder';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const map = L.map('map', { zoom: 5})
             .setView([51.505, -0.09], 13);

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [],
      fetched: [{id:9, address:'291 Misenas street san antonio cavite city'}],
      idsFromFetched: [],
      currentID: 0
    }

     this.clickMe = this.clickMe.bind(this);

  }

  render(){


 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log(this.state.fetched)
    for(let i = 0; i<this.state.fetched.length; i++){
      this.state.idsFromFetched.push(this.state.fetched[i].id)
    }

    let markers = {};
    if(this.state.fetched.length > 1){
      for (let i = 0; i<this.state.fetched.length; i++){
        let business = this.state.fetched[i];
         new L.Control.Geocoder.Nominatim().geocode(this.state.fetched[i].address, (res)=>{
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

        markers[business.id]._icon.id = business.id;

    })}}

          for (var i = 0; i < Markers.length; i++){
          L.marker([Markers[i].lat, Markers[i].lng]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
          }

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
      fetch('/', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
          .then(fetched => this.setState({ fetched }))
  }

  clickMe(){
    alert('you clicked marker:')
  }
}
