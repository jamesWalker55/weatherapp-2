import React, { Component } from 'react';
import "./app.css";

import WeatherDisplay from './weather-display';

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
    return (
      <div className='phone-container'>
        <div className='phone'>
          <WeatherDisplay apiData={this.state.apiData} />
        </div>
      </div>
    );
  }
}

export default App;
