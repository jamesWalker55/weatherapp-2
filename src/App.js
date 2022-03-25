import React, { Component } from 'react';
import "./app.css";

import Toolbar from 'components/toolbar';
import WeatherDisplay from './weather-display';
import LocationSelect from 'components/location-select';

import { fetchData, LOCATIONS } from 'helpers/openweathermap';
import tempApiData from 'data/temp-api-data.json';

/*
 * Read more about the design decisions behind the app at README.md
 */

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
      // if not using test data, set it to null for now
      this.state = {
        apiData: null,
        location: this.getLocation(),
        choosingLocation: false,
      };

      // this will update state.apiData asynchronously
      this.reloadApiData();
    }
  }

  /** get the location from session if set, otherwise default to London */
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

  /** fetch data from API and update state */
  reloadApiData = async (location) => {
    const data = await fetchData(location || this.state.location);

    this.setState({
      apiData: data
    });
  };

  /** display the location chooser popup */
  showLocationPopup = () => {
    this.setState({ choosingLocation: true });
  };

  /** hide the location chooser popup */
  closeLocationPopup = () => {
    this.setState({ choosingLocation: false });
  };

  /** change location of the app then fetch data */
  setLocation = (location) => {
    window.sessionStorage.setItem("weather-location", JSON.stringify(location));

    this.reloadApiData(location);
    // #setState is asynchronous, order doesn't really matter
    this.setState({ location: location, choosingLocation: false });
  };

  render() {
    let locationPopup;

    // display the popup if `choosingLocation` is true
    if (this.state.choosingLocation) {
      locationPopup = (
        <LocationSelect
          setLocationCallback={this.setLocation}
          closeCallback={this.closeLocationPopup}
        />
      );
    } else {
      locationPopup = null;
    }

    return (
      <div className='phone-container'>
        <div className='phone'>
          <Toolbar
            refreshCallback={this.reloadApiData}
            locationCallback={this.showLocationPopup}
          />
          <WeatherDisplay apiData={this.state.apiData} location={this.state.location} />
        </div>
        {locationPopup}
      </div>
    );
  }
}

export default App;
