import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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

            <Navbar>
            {this.removeMap}
              <div>
              <Navbar.Header>
                <Link to='/home' onClick={this.forceUpdate}>
                    <Navbar.Brand>
                      <img className='logo' src={require('./logo.jpg')} alt='' />
                      <h1>Cartographer</h1>
                    </Navbar.Brand>
                </Link>
              </Navbar.Header>
              <Nav>
                  <ul className='navList'>
                  {this.props.children}
                  <li>
                      <Link to='/api/signup'>
                        <NavItem eventKey={1}>Create Shop</NavItem>
                      </Link>
                      </li>
                      <li>
                        Logout
                      </li>
                    
                  </ul>
               
              </Nav>
            </div>
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
            </Navbar>

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