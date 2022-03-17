import React, { Component } from 'react';
import "./app.css";

import Header from './components/header';
import Forecast from './cards/forecast';
import SunAndMoon from './cards/sun-and-moon';

import tempApiData from './data/temp-api-data.json';


class App extends Component {
  render() {
    return (
      <div className='phone-container'>
        <div className='phone'>
          {/*<Toolbar apiData={tempApiData} />*/}
          <Header apiData={tempApiData} />
          <Forecast apiData={tempApiData} />
          <SunAndMoon apiData={tempApiData} />
        </div>
      </div>
    );
  }
}

export default App;