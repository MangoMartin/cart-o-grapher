import React, { Component } from 'react';
import './index.css';
<<<<<<< HEAD

=======
        
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
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
<<<<<<< HEAD
            <input type="submit" value="Log In" />
=======
            <input type="submit" value="Log In"/>
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
          </form>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
=======

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
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636
}

export default Login;
