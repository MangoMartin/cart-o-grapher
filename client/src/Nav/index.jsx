import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import { Navbar, Nav, NavItem } from 'react-bootstrap';
=======
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
import CreateShop from '../ProfileDesign';
import Login from '../ProfileDesign/Login';
import Signup from '../ProfileDesign/Signup';
import Home from '../Cartograph';
import './index.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
=======

>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636

class Container extends Component {

    constructor(){
        super();
<<<<<<< HEAD
        this.removeMap = this.removeMap.bind(this);
    }

    render() {
        return(
            <Navbar>
              <Navbar.Header>
                <Link to='/' onClick={this.removeMap}>
                    <Navbar.Brand>
                      <img className='logo' src={require('./logo.jpg')} alt='' />
                      <h1>Cart-o-Grapher</h1>
                    </Navbar.Brand>
                </Link>
              </Navbar.Header>
              <Nav>
                  <ul>
                  {this.props.children}
                      <Link to='/api/signup' onClick={this.removeMap}>
                        <NavItem eventKey={1}>Create Shop</NavItem>
                      </Link>
                      <Link to='/logout' onClick={this.removeMap}>
                        <NavItem eventKey={2}>Log Out</NavItem>
                      </Link>
                  </ul>
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

        )
    }

    componentDidMount(){
        this.removeMap();
    }

    removeMap() {
        if(this.map !== undefined || this.map !== null) {
        this.map.remove();
    }
    }
};

class Logout extends Component {
    render(){
        return(
            <div className='logbody'>

            </div>
        )
    }
};

export default Container;
=======
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
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
