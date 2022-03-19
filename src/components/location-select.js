import React, { Component } from 'react';

import { queryLocation } from 'helpers/openweathermap';

import './location-select.css';

class LocationOption extends Component {
  setLocation = () => {
    this.props.setLocationCallback(this.props.location);
  };

  render() {
    const location = this.props.location;
    return (
      <div className='option' onClick={this.setLocation}>
        <div className='right-side'>
          <span className='state'>{location.state}</span>
          <span className='lat-lon'>({location.lat.toFixed(2)}, {location.lon.toFixed(2)})</span>
        </div>
        <span className='name'>{location.name}</span>
      </div>
    );
  }
}

export default class LocationSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      results: null,
    };
  }

  onInputChange = (e) => {
    const searchText = e.target.value;

    this.setState({ search: searchText });

    // call api after 0.5 seconds of not typing
    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.doSearch(this.state.search);
    }, 500);
  };

  // call api and update results list
  doSearch = async (text) => {
    if (text.trim().length === 0) {
      // empty search query
      this.setState({ results: [] });
    } else {
      // normal search query
      const locations = await queryLocation(text);
      this.setState({ results: locations });
    }
  };

  componentWillUnmount() {
    // disable interval
    if (this.timeout) clearTimeout(this.timeout);
  }

  closeCallback = (e) => {
    // don't do anything if child is clicked
    if (e.target !== e.currentTarget) return;

    this.props.closeCallback(e);
  };

  render() {
    let results;

    if (this.state.results) {
      if (this.state.results.length === 0) {
        results = (
          <div className='results'>
            <p>Location not found</p>
          </div>
        );
      } else {
        const options = this.state.results.map(
          loc => (
            <LocationOption
              location={loc}
              key={loc.lat.toString() + loc.lon.toString()}
              setLocationCallback={this.props.setLocationCallback}
            />
          )
        );
        results = (
          <div className='results'>
            <p>Choose a location:</p>
            {options}
          </div>
        );
      }
    }

    return (
      <div className="location-select" onClick={this.closeCallback}>
        <input className='search' placeholder='Input your location...' value={this.state.search} onChange={this.onInputChange} />
        {results}
      </div>
    );
  }
}
