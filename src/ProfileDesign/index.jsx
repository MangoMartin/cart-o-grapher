import React, { Component } from 'react';

import AddLinks from './AddLinks';
import ImageForm from './ImageForm';
import Checkbox from './Checkbox';
import './index.css';

const checkboxes = [
  'Local Delivery',
  'Pickup',
];

class Settings extends Component {

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
      mHrs: 'Closed',
      tHrs: 'Closed',
      wHrs: 'Closed',
      thHrs: 'Closed',
      fHrs: 'Closed',
      sHrs: 'Closed',
      suHrs: 'Closed',
    };
  }

	render(){
		return(
			<div className='settings-body'>
        <h1>Set up shop/Edit shop</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Store info:</h3>
          Shop name: {this.state.shopName}<br />
          <input
            type='text'
            onChange={this.handleShopNameChange}
          /><br />
          Owner name: {this.state.owner}<br />
          <input
            type='text'
            onChange={this.handleOwnerChange}
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
          /><br />
          City: <input
            type='text'
            onChange={this.handleCityChange}
          /><br />
          State: <input
            type='text'
            onChange={this.handleStateChange}
          /><br />
          Zip code: <input
            type='text'
            onChange={this.handleZipChange}
          /><br />
          Country: <input
            type='text'
            onChange={this.handleCountryChange}
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
          {this.createCheckboxes()}
          <h3>Hours of Operation:</h3>
          Monday: {this.state.mHrs}<br />
          <input
            type='text'
            onChange={this.handleMHrsChange}
          /><br />
          Tuesday: {this.state.tHrs}<br />
          <input
            type='text'
            onChange={this.handleTHrsChange}
          /><br />
          Wednesday: {this.state.wHrs}<br />
          <input
            type='text'
            onChange={this.handleWHrsChange}
          /><br />
          Thursday: {this.state.thHrs}<br />
          <input
          type='text'
            onChange={this.handleThHrsChange}
          /><br />
          Friday: {this.state.fHrs}<br />
          <input
            type='text'
            onChange={this.handleFHrsChange}
          /><br />
          Saturday: {this.state.sHrs}<br />
          <input
            type='text'
            onChange={this.handleSHrsChange}
          /><br />
          Sunday: {this.state.suHrs}<br />
          <input
            type='text'
            onChange={this.handleSuHrsChange}
          /><br />
          <input 
            type='submit'
            value='Update all store information'
          /><br />
        </form>
        <h3>External links to store sites:</h3><br />
        <AddLinks />
        <h3>Add a profile image for your store:</h3><br />
        <ImageForm />
        <img src='./logo.jpg' alt=''/>
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

  handleMHrsChange = (event) => {
    this.setState({ mHrs: event.target.value });
  }

  handleTHrsChange = (event) => {
    this.setState({ tHrs: event.target.value });
  }

  handleWHrsChange = (event) => {
    this.setState({ wHrs: event.target.value });
  }

  handleThHrsChange = (event) => {
    this.setState({ thHrs: event.target.value });
  }

  handleFHrsChange = (event) => {
    this.setState({ fHrs: event.target.value });
  }

  handleSHrsChange = (event) => {
    this.setState({ sHrs: event.target.value });
  }

  handleSuHrsChange = (event) => {
    this.setState({ suHrs: event.target.value });
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

  createCheckboxes = () => (
    checkboxes.map(this.createCheckbox)
  )

  handleSubmit = (event) => {
    event.preventDefault();
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

}

export default Settings;
