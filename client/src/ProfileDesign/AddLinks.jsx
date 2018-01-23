import React, { Component } from 'react';

import './index.css';

class AddLinks extends Component {

  constructor() {
    super();
    this.state = {
      siteName:'',
      links: [],
    };
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        {this.state.links.map((link, index) => (
          <div className="link" key={index + 1}>
            <input
              type="text"
              placeholder={`Link #${index + 1}`}
              value={link.siteName}
              onChange={this.handleLinkSiteNameChange(index)}
              required
            />
            <button type="button" onClick={this.handleRemoveLink(index)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddLink} className="small">Add Link</button>
        <button>Upload shop links</button><br />
      </form> 
    )
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

export default AddLinks;
