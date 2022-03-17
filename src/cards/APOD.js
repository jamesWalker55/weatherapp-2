import React, { Component } from 'react';
import './common.css';

import FetchAPOD from './fetch-APOD';

class APOD extends Component {
  render() {
    return (
      <div className="card">
      Astronomy Picture of the Day
        <div><FetchAPOD></FetchAPOD></div>
      </div>
    );
  }
}

export default APOD;