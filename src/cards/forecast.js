import React, { Component } from 'react';

import './common.css';
import './forecast.css';
import circleSvgPath from "../assets/circle-info-solid.svg";

class Forecast extends Component {
  render() {
    return (
      <div className="card forecast">
        <div className='meta-info'>
          <div className='icon'>
            <svg width="18" height="18">
              <image href={circleSvgPath} width="18" height="18" />
            </svg>
          </div>
          Updated at 17:15
        </div>
        <h2>Forecast</h2>
        <div className='graphs'>
          sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd sajghd<br/>
          sajghd<br/>
          sajghd<br/>
          sajghd<br/>
          sajghd<br/>
          sajghd<br/>

        </div>
      </div>
    );
  }
}

export default Forecast;