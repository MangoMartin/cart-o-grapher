import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CreateShop from '../ProfileDesign';
import Login from '../ProfileDesign/Login';
import Signup from '../ProfileDesign/Signup';
import Home from '../Cartograph';
import './index.css';


class Container extends Component {

    constructor(){
        super();
       this.removeMap = this.removeMap.bind(this);
    }

    render() {
      return(
        <div className='navbar'>
        {this.removeMap}
          <Link to='/home' onClick={this.forceUpdate}>
            <img className='logo' src={require('./logo.jpg')} alt='' />
            <h1 className='cart-o-grapher'>Cartographer</h1>
          </Link>
          <Link to='/api/signup'>
            <div className='signup-link'>
              <h4>Signup</h4>
            </div>  
          </Link>
          <Link to='/api'>
            <div className='login-link'>
              <h4>Login to map your shop</h4>
            </div>     
          </Link>
          <Switch>
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/api/owner"
              component={CreateShop}
            />
            <Route
              exact
              path="/api/signup"
              component={Signup}
            />
            <Route
              exact
              path="/api"
              component={Login}
            />
          </Switch>
        </div>
      )
    }

    removeMap() {
      var remap = document.getElementById("map");
      var tiles = document.getElementsByClassName("leaflet-layer").length;
      if (!remap) {
        return;
      }
      else if (tiles > 1) {
        remap.parentNode.removeChild(remap);
      } 
    }
};

export default Container;