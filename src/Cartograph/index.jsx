import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import MappedShops from './LocalShops';
import Markers from './marker.js';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Control, Popup } from 'leaflet-control-geocoder';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const map = L.map('map', { zoom: 5})
             .locate({setView: true, maxZoom: 16});

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : '0',
    left              : '0',
    right             : '0',
    bottom            : '0'
  },
  content : {
    position          : 'fixed',
    minWidth          : '500px',
    minHeight         : '500px',
    top               : '50%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)'
  }
};

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [],
      fetched: [{id:9, address:'291 Misenas street san antonio cavite city'}],
      idsFromFetched: [],
      currentID: 0,
      modalIsOpen: false
    }

     this.clickMe = this.clickMe.bind(this);
     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
            <div className='outer-button'>
              <button onClick={this.openModal}>Open Modal</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={modalStyles}
                contentLabel='Example'
              >

                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                  <div> This work for you? </div>
                  <button onClick={this.closeModal}>Close</button>
              </Modal>
            </div>
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
