import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import MyStore from '../StoreProfile';
import Settings from '../ProfileDesign';
import Home from '../Cartograph';
import Maps from '../Cartograph/Map.jsx';

class Container extends Component {

  constructor(){
    super();

    this.removeMap = this.removeMap.bind(this);

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
            <Link to='/mystore' onClick={this.removeMap}><li>My Store</li></Link>
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
      </div>
    )
  }

  removeMap() {
    this.map.remove();
  }
}




class Logout extends Component {

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default Container;
