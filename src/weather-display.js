import React, { Component } from 'react';
import "./app.css";

import Header from './components/header';
import Forecast from './cards/forecast';
import SunAndMoonAlt from './cards/sun-and-moon-alt';
import StarMap from './cards/star-map';
import DailyPicture from './cards/daily-picture';

/*
 * Read more about the design decisions behind the app at README.md
 */

export default class WeatherDisplay extends Component {
  render() {
    const apiData = this.props.apiData;

    if (apiData) {
      // data is received, render the app
      return (
        <div className='weather-display'>
          <Header apiData={apiData} location={this.props.location} />
          <Forecast apiData={apiData} />
          <SunAndMoonAlt apiData={apiData} />
          <StarMap apiData={apiData} />
          <DailyPicture apiData={apiData} />
        </div>
      );
    } else {
      // if data isn't received yet, render an empty div
      return (
        <div className='weather-display'>
        </div>
      );
    }
  }
}
