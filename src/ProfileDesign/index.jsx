import React, { Component } from 'react';
import './index.css';

class Settings extends Component {

	constructor() {
		super();
    this.state = {
      shopName: 'Untitled',
      ownerName: 'Shop Owner',
      shopImg: 'blank.jpg',
      country: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      siteName:'',
      links: [],

    };
    this.handleShopNameChange = this.handleShopNameChange.bind(this);
    this.handleSiteNameChange = this.handleSiteNameChange.bind(this);
    this.handleLinkSiteNameChange = this.handleLinkSiteNameChange.bind(this);
    this.handleAddLink = this.handleAddLink.bind(this);
    this.handleRemoveLink = this.handleRemoveLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	render(){
		return(
			<div class='settings-body'>
        <h1>Set up shop/Edit shop</h1>
        <form onSubmit={this.handleSubmit}>
          Shop name: <input
            type='text'
            placeholder='Item Name'
            name='itemName'
            value={this.state.shopName}
            onChange={this.handleShopNameChange}
           /><br />
          {this.state.links.map((link, index) => (
          <div className="link">
            <input
              type="text"
              placeholder="Company name, e.g. Magic Everywhere LLC"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
            <input
              type="text"
              placeholder={`Link #${index + 1} siteName`}
              value={link.siteName}
              onChange={this.handleLinkSiteNameChange(index)}
              required
            />
            <button type="button" onClick={this.handleRemoveLink(index)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddLink} className="small">Add Link</button>
        <button>Link Shop</button>
        </form> 
      </div>
    )
  }

  handleShopNameChange = (event) => {
    this.setState({ shopName: event.target.value });
  }

  handleSiteNameChange = (event) => {
    this.setState({ siteName: event.target.value });
  }
  
  handleLinkSiteNameChange = (index) => (event) => {
    const newLinks = this.state.links.map((link, lnkIdx) => {
      if (index !== lnkIdx) return link;
      return { ...link, siteName: event.target.value };
    });
    
    this.setState({ links: newLinks });
  }
  
  
  handleAddLink = () => {
    this.setState({ links: this.state.links.concat([{ siteName: '' }]) });
  }
  
  handleRemoveLink = (index) => () => {
    this.setState({ links: this.state.links.filter((s, lnkIdx) => index !== lnkIdx) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { siteName, links } = this.state;
    alert(`Incorporated: ${siteName} with ${links.length} links`);
  }

}

export default Settings;
