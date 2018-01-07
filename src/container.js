import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import MyStore from './myStore.js';
import Settings from './settings.js';
import Home from './home.js';
import MapContainer from './Map.js';

class Container extends Component {

  constructor(){
    super();
  }

  render() {

    return(
      <div
        className='header'>
        <div
          className='header-logo'>
          <h1>Cart-o-Grapher</h1>
        </div>
        <div
          className='header-nav'>
          <ul>
          {this.props.children}
            <Link to='/'><li>Home</li></Link>
            <Link to='/mystore'><li>My Store</li></Link>
            <Link to='/settings'><li>Settings</li></Link>
            <Link to='/logout'><li>Log Out</li></Link>
          </ul>

          <Switch>
          <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/mystore"
              component={MyStore}
            />
            <Route
              path="/settings"
              component={Settings}
            />
            <Route
              path="/logout"
              component={Logout}
            />
          </Switch>
        </div>
        <MapContainer/>
      </div>
    )
  }
}

export default Container;
