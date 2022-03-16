import React, { Component } from 'react';
import './sun-moon.css';
import FetchSunriseTime from './fetch-Sunrise-Time';
import FetchMoonriseTime from './fetch-Moonrise-Time';
import ProgressBar from './ProgressBar'


class SunAndMoon extends Component {
  render() {
    return (
      <div className="card">
        <p>Sun and Moon</p>
        <br></br>
        <br></br>
        <div><ProgressBar></ProgressBar></div>
        <div><FetchSunriseTime></FetchSunriseTime></div>
        <div><FetchMoonriseTime></FetchMoonriseTime></div>
      </div>
    );
  }
}

export default SunAndMoon;
