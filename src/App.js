import React, { Component } from 'react';
import "./app.css";

import Toolbar from 'components/toolbar';
import WeatherDisplay from './weather-display';
import LocationSelect from 'components/location-select';

import { fetchData, LOCATIONS } from 'helpers/openweathermap';
import tempApiData from 'data/temp-api-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    if (this.props.useTestData) {
      this.state = {
        apiData: tempApiData,
        location: this.getLocation(),
        choosingLocation: false,
      };
    } else {
      this.state = {
        apiData: null,
        location: this.getLocation(),
        choosingLocation: false,
      };

      this.refresh();
    }
  }

  getLocation() {
    const defaultLocation = LOCATIONS.LONDON;

    try {
      const sessionLocation = JSON.parse(window.sessionStorage.getItem("weather-location"));

      if (sessionLocation) return sessionLocation;
    } catch (e) {
      // do nothing
    }

    return defaultLocation;
  }

  refresh = async (location) => {
    const data = await fetchData(location || this.state.location);

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

  setLocation = (location) => {
    window.sessionStorage.setItem("weather-location", JSON.stringify(location));

    this.refresh(location);
    // #setState is asynchronous, order doesn't really matter
    this.setState({ location: location, choosingLocation: false });
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
          <WeatherDisplay apiData={this.state.apiData} location={this.state.location} />
        </div>
        {locationPopup}
      </div>
    );
  }
}

export default App;
