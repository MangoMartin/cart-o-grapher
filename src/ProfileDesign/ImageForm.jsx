import React, { Component } from 'react';

import './index.css';

class ImageForm extends Component {
	
	constructor() {
    	super();
    	this.state = {
      		shopImage: ''
    	};
    	this.handleUpload = this.handleUpload.bind(this);
  	}

	render(){
		return(
			<form
  				id="uploadForm"
  				ref="form"
  				encType="multipart/form-data"
 				method="post"
  				action="/upload"
  				onSubmit={this.handleUpload}
			>
	 			<input
	  				type="file"
	   				name={this.shopImage}
	 			/>
	 			<input
	   				type="submit"
	   				value="UploadFile"
	   				name="submit"
	 			/>
			</form>
		)
	}

	handleUpload(event) {
  		console.log('hey');
  		event.preventDefault();
	}

}

export default ImageForm;