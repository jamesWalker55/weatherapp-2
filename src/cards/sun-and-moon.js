import React, { Component } from 'react';
import './sun-moon.css';
import imagePath from './sun-moon-images/solar.jpeg'
import FetchSunriseTime from './fetch-Sunrise-Time';
import FetchSunsetTime from './fetch-Sunset-Time';

class SunAndMoon extends Component {
  render() {
    return (
      <div className="card">
        <p>Sun and Moon</p>
        <img src={imagePath} alt="solar graph"></img>
          <div><FetchSunriseTime></FetchSunriseTime></div>
          <div><FetchSunsetTime></FetchSunsetTime></div>
      </div>
    );
  }
}

export default SunAndMoon;