import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Settings from '../ProfileDesign';
import Home from '../Cartograph';
import Maps from '../Cartograph/Map.js';

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
            <Link to='/' onClick={this.removeMap}><li>Home</li></Link>
            <Link to='/settings' onClick={this.removeMap}><li>Settings</li></Link>
            <Link to='/logout' onClick={this.removeMap}><li>Log Out</li></Link>
          </ul>

          <Switch>
          <Route
              exact
              path="/"
              component={Home}
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
