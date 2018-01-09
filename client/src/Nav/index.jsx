import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CreateShop from '../ProfileDesign';
import Home from '../Cartograph';
import Maps from '../Cartograph/Map.js';
import './index.css';

class Container extends Component {

    constructor(){
        super();
        this.removeMap = this.removeMap.bind(this);
    }

    render() {
        return(
            <div className='header'>
                <Link to='/' onClick={this.removeMap}>
                    <div className='header-logo'>
                        <img className='logo' src={require('./logo.jpg')} alt='' />
                        <h1>Cart-o-Grapher</h1>
                    </div>
                </Link>
                <div className='header-nav'>
                    <ul>
                    {this.props.children}
                        <Link to='/create' onClick={this.removeMap}>
                            <li>Create Shop</li>
                        </Link>
                        <Link to='/logout' onClick={this.removeMap}>
                            <li>Log Out</li>
                        </Link>
                    </ul>

                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            path="/create"
                            component={CreateShop}
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
