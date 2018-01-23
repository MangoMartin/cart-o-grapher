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

    }

    render() {
        return(
          <div className='NavbarInstance'>
            <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                    <img className='logo' src={require('./logo.jpg')} alt='' />
                    <Link to='/' onClick={this.removeMap}>Cart-o-Grapher</Link>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem href='/api/signup' onClick={this.removeMap}>Create Shop</NavItem>
                    <NavItem href='/logout' onClick={this.removeMap}>Log Out</NavItem>
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
