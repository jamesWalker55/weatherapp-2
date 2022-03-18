import React, { Component } from 'react';
import "./app.css";

import Header from './components/header';
import Forecast from './cards/forecast';
import SunAndMoonAlt from './cards/sun-and-moon-alt';
import StarMap from './cards/star-map';
import DailyPicture from './cards/daily-picture';

import fetchApiData from './openweathermap';

import tempApiData from './data/temp-api-data.json';


class App extends Component {
  constructor(props) {
    super(props);

    if (this.props.useTestData) {
      this.state = {
        apiData: tempApiData,
      };
    } else {
      this.state = {
        apiData: null,
      };

      fetchApiData().then((data) => {
        this.setState({
          apiData: data
        });
      });
    }
  }

  render() {
    if (this.state.apiData) {
      return (
        <div className='phone-container'>
          <div className='phone'>
            {/*<Toolbar apiData={this.state.apiData} />*/}
            <Header apiData={this.state.apiData} />
            <Forecast apiData={this.state.apiData} />
            <SunAndMoonAlt apiData={this.state.apiData} />
            <StarMap apiData={this.state.apiData} />
          	<DailyPicture apiData={tempApiData} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='phone-container'>
          <div className='phone'>
          </div>
        </div>
      );
    }
  }
}

export default App;
