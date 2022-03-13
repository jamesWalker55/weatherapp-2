import React, { Component } from 'react';
import './sun-moon.css';

class SunAndMoon extends Component {
  render() {
    return (
      <div className="card">
        <p>Sun and Moon</p>
        <img src="./sun-moon-images/solar.jpeg" alt="solar graph"></img>
      </div>
    );
  }
}

export default SunAndMoon;
