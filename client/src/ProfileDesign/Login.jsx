import React, { Component } from 'react';
import './index.css';

class Login extends Component {
  render() {
    return (
      <div className='login-signup'>
        <h1>Log in</h1>
        <h3>Put your shop on the map! *cough cough*</h3>
        <div className='login'>
          <form method='POST' action='/api' encType='application/x-www-form-urlencoded'>
            <input type="text" placeholder="Username" name="username"/>
            <input type="text" placeholder="Password" name="password"/>
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
      var remap = document.getElementById("map");
      var tiles = document.getElementsByClassName("leaflet-layer").length;
      if (!remap) {
        return;
      }
      else if (tiles === 1 || tiles === 0) {
        remap.parentNode.removeChild(remap);
      } 
    }
}

export default Login;
