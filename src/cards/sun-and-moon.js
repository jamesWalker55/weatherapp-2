import React, { Component } from 'react';
import './sun-moon.css';
import imagePath from './sun-moon-images/solar.jpeg'

class SunAndMoon extends Component {
  render() {
    return (
      <div className="card">
        <p>Sun and Moon</p>
        <img src={imagePath} alt="solar graph"></img>
      </div>
    );
  }
}

export default SunAndMoon;
