import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="location">Mile End Rd (E1 4NS)</div>
        <div className="temperature">14°</div>
        <div className="status-text">Partly cloudy</div>
      </div>
    );
  }
}

export default Header;