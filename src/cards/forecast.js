import React, { Component } from 'react';

import { timestampToTimeString } from 'helpers/time';

import './common.css';
import './forecast.css';
import circleSvgPath from "assets/circle-info-solid.svg";
import HourlyChart from './parts/hourly-chart';

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
          {/* convert the timestamp to a readable format */}
          Updated at {timestampToTimeString(this.props.apiData.current.dt)}
        </div>
        <h2>Forecast</h2>
        <div className='graphs-container' style={{ position: 'relative' /* for graph axis positioning */ }}>
          <div className='graphs-scroller' style={{ overflowX: "scroll" }}>
            <div className='graphs' style={{ width: "60rem" }}>
              {/* the charts */}
              <HourlyChart apiData={this.props.apiData} title="Temperature" source="temp" unit="celsius" />
              <HourlyChart apiData={this.props.apiData} title="Humidity" source="humidity" unit="percent" />
              <HourlyChart apiData={this.props.apiData} title="Clouds" source="clouds" unit="percent" />
              <HourlyChart apiData={this.props.apiData} title="Pressure" source="pressure" unit="hPa" showDates={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;




