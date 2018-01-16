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
