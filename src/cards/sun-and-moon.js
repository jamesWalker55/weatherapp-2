import React, { Component } from 'react';
import './sun-moon.css';
import imagePath from './sun-moon-images/solar.jpeg';
import FetchSunriseTime from './fetch-Sunrise-Time';
import FetchMoonriseTime from './fetch-Moonrise-Time';

class SunAndMoon extends Component {
  render() {
    return (
      <div className="card">
        <p>Sun and Moon</p>
        {/* <img src={imagePath} alt="solar graph"></img> */}
        <br></br>
        <div class='barBorder'>
          <div class='barColour'></div>
        </div>
        <br></br>
        <div><FetchSunriseTime></FetchSunriseTime></div>
        <div><FetchMoonriseTime></FetchMoonriseTime></div>
      </div>
    );
  }
}

export default SunAndMoon;
