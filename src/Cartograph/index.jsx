import React, { Component } from 'react';
import MappedShops from './LocalShops';
import MapContainer from './Map';
import './index.css';

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      mapSearch: '',
      Radius: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseRadius = this.chooseRadius.bind(this);
  }

  render(){
    return(
      <div className='main-body'>
      	<div className='top'>
      		<div className='aboutCoG'>
            <p className='about-text'> Cart-o-grapher allows you to bypass the hassle of shipping
            by locating nearby inventories of your favorite e-commerce shops,
            such as: Amazon, Etsy, Ebay, and more. Just enter in a location below to
            view nearby stores located on the map and their respective store profiles
            below.</p>
      		</div>
      		<MapContainer
      		/>
      	</div>
      	<div className='search-divider'>
      		<div className='search-info'>
            <h4 className='search-text'>Search by location and choose map radius in miles</h4>
      		</div>
      		<div className='search-form'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                className='form-location'
                name='searchStore'
                placeholder='Enter state, city, address, zip...'
                value={this.state.mapSearch}
                onChange={this.handleChange}
                required
              />
              <input
                list='radius'
                name='radii'
                placeholder='How far?'
                value={this.state.Radius}
                onChange={this.chooseRadius}
                className='radius'
              />
              <datalist id="radius">
                <option value="5">miles away</option>
                <option value="10">miles away</option>
                <option value="15">miles away</option>
                <option value="25">miles away</option>
                <option value="50">miles away</option>
                <option value="100">miles away</option>
              </datalist>
              <input
                type='submit'
                value='Cart-o-graph!'
                className='cartograph'
              /><br />
            </form>
      		</div>
      	</div>
      	<MappedShops
      	/>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      mapSearch : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  chooseRadius(event){
    this.setState({
      Radius : event.target.value
    });
  }
}
