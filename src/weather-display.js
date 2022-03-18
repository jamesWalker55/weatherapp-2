import React, { Component } from 'react';
import "./app.css";

import Header from './components/header';
import Forecast from './cards/forecast';
import SunAndMoonAlt from './cards/sun-and-moon-alt';
import StarMap from './cards/star-map';
import DailyPicture from './cards/daily-picture';

export default class WeatherDisplay extends Component {
  render() {
    const apiData = this.props.apiData;

    if (apiData) {
      return (
        <div className='weather-display'>
          <Header apiData={apiData} />
          <Forecast apiData={apiData} />
          <SunAndMoonAlt apiData={apiData} />
          <StarMap apiData={apiData} />
          <DailyPicture apiData={apiData} />
        </div>
      );
    } else {
      return (
        <div className='weather-display'>
        </div>
      );
    }
  }
}
