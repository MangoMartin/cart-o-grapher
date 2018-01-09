import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import LoginSignup from './LoginSignup';
import AddLinks from './AddLinks';
import AddCategories from './AddCategories';
import ImageForm from './ImageForm';
import Checkbox from './Checkbox';
import Shop from '../StoreProfile';
import './index.css';

const pickupDelivery = [
  'Local Delivery',
  'Pickup',
];

const daysOpen = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

class CreateShop extends Component {

	constructor() {
		super();
    this.state = {
      shopName: 'Untitled',
      owner: 'No name provided',
      about: 'No description provided',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: 'None Provided',
      email: 'None provided',
    };
  }

	render(){
		return(
			<div className='settings-body'>
        <LoginSignup />
        <h1>Set up shop/Edit shop</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Store info:</h3>
          Shop name: {this.state.shopName}<br />
          <input
            type='text'
            onChange={this.handleShopNameChange}
            required
          /><br />
          Owner name: {this.state.owner}<br />
          <input
            type='text'
            onChange={this.handleOwnerChange}
            required
          /><br />
          Store description: {this.state.about}<br />
          <input
            type='text'
            onChange={this.handleAboutChange}
          /><br />
          <h3>Address:</h3><br />
          Address: <input
            type='text'
            onChange={this.handleAddressChange}
            required
          /><br />
          City: <input
            type='text'
            onChange={this.handleCityChange}
            required
          /><br />
          State: <input
            type='text'
            onChange={this.handleStateChange}
            required
          /><br />
          Zip code: <input
            type='text'
            onChange={this.handleZipChange}
            required
          /><br />
          Country: <input
            type='text'
            onChange={this.handleCountryChange}
            required
          /><br />
          <h3>Contact information:</h3><br />
          Phone number: {this.state.phone}<br />
          <input
            type='text'
            onChange={this.handlePhoneChange}
          /><br />
          Email: {this.state.email}<br />
          <input
            type='text'
            onChange={this.handleEmailChange}
          /><br />
          {this.createPickupDeliveryCheckboxes()}
          <h3>Hours of Operation:</h3>
          <p>Check off which days your store is open for business</p>
          {this.createDaysOpenCheckboxes()}
          <input 
            type='submit'
            value='Update all store information'
          /><br />
        </form>
        <h3>Add categories that describe what your store sells:</h3><br />
        <p>i.e. Jewelry, Electronics, etc.</p>
        <AddCategories />
        <h3>Add external links to store sites:</h3><br />
        <AddLinks />
        <h3>Add a profile image for your store:</h3><br />
        <ImageForm />
        <Link to='/myshop'>
          Check out your store profile
        </Link>
        <Switch>
          <Route
            path='/myshop'
            component={Shop}
          />
        </Switch>
      </div>
    )
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  handleShopNameChange = (event) => {
    this.setState({ shopName: event.target.value });
  }

  handleOwnerChange = (event) => {
    this.setState({ owner: event.target.value });
  }

  handleAboutChange = (event) => {
    this.setState({ about: event.target.value });
  }

  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  }

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  }

  handleStateChange = (event) => {
    this.setState({ state: event.target.value });
  }

  handleZipChange = (event) => {
    this.setState({ zip: event.target.value });
  }

  handleCountryChange = (event) => {
    this.setState({ country: event.target.value });
  }

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createPickupDeliveryCheckboxes = () => (
    pickupDelivery.map(this.createCheckbox)
  )

  createDaysOpenCheckboxes = () => (
    daysOpen.map(this.createCheckbox)
  )

  handleSubmit = (event) => {
    event.preventDefault();
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox + 'is selected.');
    }
  }

}

export default CreateShop;
