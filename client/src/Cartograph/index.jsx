import React, { Component } from 'react';
import MappedShops from './LocalShops';
import MapContainer from './Map.jsx';
import './index.css';

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      tests: [],
    };
  }

  render(){
    const { tests } = this.state;
    return(
      <div className='main-body'>
      	<div className='top'>
      		<div className='aboutCoG'>
            <p className='about-text'> Cart-o-grapher allows you to bypass the hassle of shipping
            by locating nearby inventories of your favorite e-commerce shops,
            such as: Amazon, Etsy, Ebay, and more. Just enter in a location below to
            view nearby stores located on the map and their respective store profiles
            below.
            </p>
            {tests.map((test, index) =>
              <div key={index}>
                {test.username}
              </div>
            )}
      		</div>
      		<MapContainer 
      		/>
      	</div>
      	<MappedShops
      	/>
      </div>
    )
  }
  
  componentDidMount() {
    this.getTest();
  }

  getTest() {
    fetch('/api/tests')
      .then(res => res.json())
      .then(tests => this.setState({ tests }));
  }
}
