import React, { Component } from 'react';
import "./app.css";

import Forecast from './cards/forecast';
import SunAndMoon from './cards/sun-and-moon';

class App extends Component {
  render() {
    return (
      <div className='phone-container'>
        <div className='phone'>
          TEST
          {/*<Toolbar />*/}
          {/*<Header />*/}
          <Forecast />
          <SunAndMoon />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
    );
  }
}

export default App;