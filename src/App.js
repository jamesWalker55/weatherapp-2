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
        location: null,
      };
    } else {
      this.state = {
        apiData: null,
        location: null,
      };

      this.refresh();
    }
  }

  refresh = async () => {
    let data;

    if (this.state.location) {
      data = await fetchApiData(this.state.location);
    } else {
      data = await fetchApiData();
    }

    this.setState({
      apiData: data
    });
  };

  setLocation = async (location) => {
    this.setState({ location: location });

    await this.refresh();
  };

  render() {
    return (
      <div className='phone-container'>
        <div className='phone'>
          <Toolbar
            refreshCallback={this.refresh}
            setLocationCallback={this.setLocation}
          />
          <WeatherDisplay apiData={this.state.apiData} />
        </div>
      </div>
    );
  }
}

export default App;
