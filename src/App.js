import React, { Component } from 'react';
import "./app.css";

import Toolbar from 'components/toolbar';
import WeatherDisplay from './weather-display';
import LocationSelect from 'components/location-select';

import { fetchData } from 'helpers/openweathermap';
import tempApiData from 'data/temp-api-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    if (this.props.useTestData) {
      this.state = {
        apiData: tempApiData,
        location: null,
        choosingLocation: false,
      };
    } else {
      this.state = {
        apiData: null,
        location: null,
        choosingLocation: false,
      };

      this.refresh();
    }
  }

  refresh = async () => {
    let data;

    if (this.state.location) {
      data = await fetchData(this.state.location);
    } else {
      data = await fetchData();
    }

    this.setState({
      apiData: data
    });
  };

  chooseLocation = () => {
    this.setState({ choosingLocation: true });
  };

  closeLocationSelector = () => {
    this.setState({ choosingLocation: false });
  };

  setLocation = async (location) => {
    this.setState({ location: location, choosingLocation: false });

    await this.refresh();
  };

  render() {
    let locationPopup;

    if (this.state.choosingLocation) {
      locationPopup = (
        <LocationSelect
          setLocationCallback={this.setLocation}
          closeCallback={this.closeLocationSelector}
        />
      );
    } else {
      locationPopup = null;
    }

    return (
      <div className='phone-container'>
        <div className='phone'>
          <Toolbar
            refreshCallback={this.refresh}
            chooseLocationCallback={this.chooseLocation}
          />
          <WeatherDisplay apiData={this.state.apiData} />
        </div>
        {locationPopup}
      </div>
    );
  }
}

export default App;
