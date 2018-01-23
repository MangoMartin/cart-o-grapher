import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import CreateShop from '../ProfileDesign';
import Login from '../ProfileDesign/Login';
import Signup from '../ProfileDesign/Signup';
import Home from '../Cartograph';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Container extends Component {

    constructor(){
      super();

      this.removeMap = this.removeMap.bind(this);

    }


    render() {
        return(
          <div className='NavbarInstance'>
          {this.removeMap}
            <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                    <img className='logo' src={require('./logo.jpg')} alt='' />
                    <Link to='/'>Cart-o-Grapher</Link>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem href='/api/signup'>Create Shop</NavItem>
                    <NavItem href='/logout'>Log Out</NavItem>
              </Nav>

                  <Switch>
                      <Route
                          exact
                          path="/"
                          component={Home}
                      />
                      <Route
                          path="/api/owner"
                          component={CreateShop}
                      />
                      <Route
                          path="/api/signup"
                          component={Signup}
                      />
                      <Route
                          path="/api"
                          component={Login}
                      />
                      <Route
                          path="/logout"
                          component={Logout}
                      />
                  </Switch>
            </Navbar>
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


class Logout extends Component {

    render(){
        return(
          <div>
            <div className='logbody'>

            </div>
          </div>
        )
    }
};

export default Container;
