import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="location">Mile End Rd (E1 4NS)</div>
        <div className="temperature">{Math.round(this.props.apiData.current.temp - 273.15)}°</div>
        <div className="status-text">{this.props.apiData.current.weather[0].main}</div>
      </div>
    );
  }
}

export default Header;