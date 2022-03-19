import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    let statusText = this.props.apiData.current.weather[0].description;

    // capitalize the first letter
    statusText = statusText[0].toUpperCase() + statusText.slice(1);

    return (
      <div className="header">
        <div className="location">{this.props.location.name}</div>
        <div className="temperature">{Math.round(this.props.apiData.current.temp - 273.15)}°</div>
        <div className="status-text">{statusText}</div>
      </div>
    );
  }
}

export default Header;