import React, { Component } from 'react';
import AddLinks from './AddLinks';
import ImageForm from './ImageForm';
import Checkbox from './Checkbox';
import './index.css';
import axios from 'axios';

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
      address: 'asdfasdf',
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
        <form
          method='POST'
          action='localhost:3001/about'>
          <input id='input-field' type='text' />
          <input name='button' type='submit' value='Submit' />
        </form>
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
