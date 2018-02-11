import React, { Component } from 'react';
import MappedShops from './LocalShops';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Control, Popup } from 'leaflet-control-geocoder';
<<<<<<< HEAD
import $ from 'jquery';
import './index.css';

const map = L.map('map', { zoom: 5})
             .setView([51.505, -0.09], 13);
=======
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {Link, Route, Switch} from 'react-router-dom';
import Login from '../ProfileDesign/Login';
import Signup from '../ProfileDesign/Signup';
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
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [],
<<<<<<< HEAD
      fetched: [{id:9, address:'291 Misenas street san antonio cavite city'}],
      idsFromFetched: [],
      currentID: 0
    }
     this.clickMe = this.clickMe.bind(this);
    
  }

  render(){
  
        
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
=======
      fetched: [{id:9, address:'163 William Street', city:'New York', state: 'NY', zip: '10038'}],
      idsFromFetched: [],
      currentID: 0
    }
    
    this.clickMe = this.clickMe.bind(this);
  }

  render(){

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log(this.state.fetched)
    for(let i = 0; i<this.state.fetched.length; i++){
      this.state.idsFromFetched.push(this.state.fetched[i].id)
    }
<<<<<<< HEAD

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
      fetch('/', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
=======
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
          markers[person.id] = L.marker([res[0].center.lat, res[0].center.lng], {icon: logoIcon})
            .bindPopup(`${this.state.fetched[i].shop_name}<br>
                        ${this.state.fetched[i].address}<br>
                        ${this.state.fetched[i].city}<span>, </span>${this.state.fetched[i].state}<br>
                        ${this.state.fetched[i].zip}<br>
                        ${this.state.fetched[i].createdAt}<br>`)
            .addTo(map).on('click', (e)=>{
              this.openPopup();
            })
            markers[person.id]._icon.id = person.id-1;

        })
      }
    }
 

     return(
      <div className='main-body'>
        <div className='top'>
          <div className='aboutCoG'>
            <h1>About Cart-o-grapher</h1>
            <p className='about-text'>Cart-o-grapher allows you to bypass the hassle of shipping
            by locating nearby inventories of your favorite e-commerce shops,
            such as: Amazon, Etsy, Ebay, and more. 
            </p>
            <h1>Using Cart-o-grapher</h1>
            <p className='about-text'>Enter an address in the map search bar to see if there are any stores marked with the cart-o-grapher logo near you! If you are a store owner and want to put your shop on the map, create an account by <Link to='/api/signup'><span className='text-signup'>signing up</span></Link>, 
            or <Link to='/api'><span className='text-login'>login</span></Link> to an existing account, and enter in your shop info such as address and shop name.
            </p>
          </div>
          <div id='map'>
          </div>
        </div>
        <Switch>
          <Route
              exact
              path="/api/signup"
              component={Signup}
            />
            <Route
              exact
              path="/api"
              component={Login}
            />
          </Switch>
      </div>
    )
  }

     componentDidMount(){
      fetch('/home')
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
          .then(res => res.json())
          .then(fetched => this.setState({ fetched }))
        //  window.map.loadMap();
    }

<<<<<<< HEAD
    clickMe(){
=======
   clickMe(){
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
      alert('you clicked marker:')
    }

}
