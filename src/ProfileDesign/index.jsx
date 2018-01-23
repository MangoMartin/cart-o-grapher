import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddLinks from './AddLinks';
import AddCategories from './AddCategories';
import ImageForm from './ImageForm';
import Checkbox from './Checkbox';
import './index.css';

const pickupDelivery = [
  'Delivery',
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
      mon: false,
      tues: false,
      wed: false,
      thur: false,
      fri: false,
      sat: false,
      sun: false,
      delivery: false,
      pickup: false
    };
  }

	render(){
		return(
			<div className='settings-body'>
        <h1>Set up shop/Edit shop</h1>
        <form method='POST' action='/api/owner' encType='application/x-www-form-urlencoded'>
          <h3>Store info:</h3>
          Shop name: {this.state.shopName}<br />
          <input
            type='text'
            name='shopname'
            onChange={this.handleShopNameChange}
            required
          /><br />
          Owner name: {this.state.owner}<br />
          <input
            type='text'
            name='owner'
            onChange={this.handleOwnerChange}
            required
          /><br />
          Store description: {this.state.about}<br />
          <input
            type='text'
            name='about'
            onChange={this.handleAboutChange}
          /><br />
          <h3>Address:</h3><br />
          Address: <input
            type='text'
            name='address'
            onChange={this.handleAddressChange}
            required
          /><br />
          City: <input
            type='text'
            name='city'
            onChange={this.handleCityChange}
            required
          /><br />
          State: <input
            type='text'
            name='state'
            onChange={this.handleStateChange}
            required
          /><br />
          Zip code: <input
            type='number'
            name='zip'
            onChange={this.handleZipChange}
            required
          /><br />
          Country: <input
            type='text'
            name='country'
            onChange={this.handleCountryChange}
            required
          /><br />
          <h3>Contact information:</h3><br />
          Phone number: {this.state.phone}<br />
          <input
            type='text'
            name='phone'
            onChange={this.handlePhoneChange}
          /><br />
          Email: {this.state.email}<br />
          <input
            type='text'
            name='email'
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
       if (label === "Sunday") {
        this.setState({ sun: false });
      } else if (label === "Saturday") {
        this.setState({ sat: false });
      } else if (label === "Monday") {
        this.setState({ mon: false });
      } else if (label === "Tuesday") {
        this.setState({ tues: false });
      } else if (label === "Wednesday") {
        this.setState({ wed: false });
      } else if (label === "Thursday") {
        this.setState({ thur: false });
      } else if (label === "Friday") {
        this.setState({ fri: false });
      } else if (label === "Delivery") {
        this.setState({ delivery: false });
      } else if (label === "Pickup") {
        this.setState({ pickup: false });
      } 
    } else {
      this.selectedCheckboxes.add(label);
      if (label === "Sunday") {
        this.setState({ sun: true });
      } else if (label === "Saturday") {
        this.setState({ sat: true });
      } else if (label === "Monday") {
        this.setState({ mon: true });
      } else if (label === "Tuesday") {
        this.setState({ tues: true });
      } else if (label === "Wednesday") {
        this.setState({ wed: true });
      } else if (label === "Thursday") {
        this.setState({ thur: true });
      } else if (label === "Friday") {
        this.setState({ fri: true });
      } else if (label === "Delivery") {
        this.setState({ delivery: true });
      } else if (label === "Pickup") {
        this.setState({ pickup: true });
      } 
    }
    
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      name={label}
      key={label}
    />
  )

  createPickupDeliveryCheckboxes = () => (
    pickupDelivery.map(this.createCheckbox)
  )

  createDaysOpenCheckboxes = () => (
    daysOpen.map(this.createCheckbox)
  )

}

export default CreateShop;
