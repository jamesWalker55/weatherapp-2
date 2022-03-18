import React, { Component } from 'react';
import "./app.css";

import Toolbar from './components/toolbar';
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

      this.refresh();
    }
  }

  refresh = async () => {
    const data = await fetchApiData();

    this.setState({
      apiData: data
    });
  };

  render() {
    return (
      <div className='phone-container'>
        <div className='phone'>
          <Toolbar refreshCallback={this.refresh} />
          <WeatherDisplay apiData={this.state.apiData} />
        </div>
      </div>
    );
  }
}

export default App;
