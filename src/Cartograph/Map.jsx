import React, { Component } from 'react';
import './index.css';
import Maps from '../map.js';

class MapContainer extends Component {
	render(){
    	return(
    		<div className="map">
    			<div className="location">
    				<p>Place, Place, Placetown, 12345</p>
    			</div>
					<Maps />
    		</div>
   		)
  	}
}

export default MapContainer;
