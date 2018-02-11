import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Signup extends Component {
  render() {
    return (
      <div className='login-signup'>
        <h1>Sign up</h1>
        <div className='signup'>
          <form method='POST' action='/api/signup' encType='application/x-www-form-urlencoded'>
            <input type="text" placeholder="Username" name="username"/>
            <input type="text" placeholder="Password" name="password"/>
            <input type="submit" value="Sign Up" />
          </form>
        </div>
        <Link to='/api'>
          Already own a store?
        </Link>
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

export default Signup;
