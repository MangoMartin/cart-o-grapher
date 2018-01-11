import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CreateShop from '../ProfileDesign';
import Home from '../Cartograph';
import './index.css';

class Container extends Component {

    constructor(props){
        super(props);
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
                        <Link to='/api' onClick={this.removeMap}>
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
                            path="/api"
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
        if(this.map !== undefined || this.map !== null) {
        this.map.remove();
    }
    }
};

class Logout extends Component {
    render(){
        return(
            <div>

            </div>
        )
    }
};

export default Container;
