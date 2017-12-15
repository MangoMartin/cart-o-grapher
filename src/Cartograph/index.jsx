import React, { Component } from 'react';
import MappedShops from './LocalShops';
import MapContainer from './Map';

class Home extends Component {

  render(){
    return(
      <div className='main-body'>
      	<div className='body-top'>
      		<div className='aboutCoG'>
      		</div>
      		<MapContainer
      		/>
      	</div>
      	<div className='search-divider'>
      		<div className='search-info'>
      		</div>
      		<div className='search-form'>

      		</div>
      	</div>
      	<MappedShops 
      	/>
      </div>
    )
  }
}

export default Home;
