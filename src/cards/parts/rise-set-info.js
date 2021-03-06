import React, { Component } from 'react';

import { timestampToTimeString } from 'helpers/time';

import './rise-set-info.css';

import upIcon from 'assets/arrow-up-solid.svg';
import downIcon from 'assets/arrow-down-solid.svg';

/** display rise and set times for the given sun/moon */
export default class RiseSetInfo extends Component {
  render() {
    return (
      <div className="rise-set-info">
        <svg className='icon' width="20" height="20">
          <image href={this.props.icon} width="20" height="20" />
        </svg>
        <div className='times'>
          <div className='time rise'>
            {timestampToTimeString(this.props.riseTime)}
            <svg className='icon' width="8" height="8">
              <image href={upIcon} width="8" height="8" />
            </svg>
          </div>
          <div className='time set'>
            {timestampToTimeString(this.props.setTime)}
            <svg className='icon' width="8" height="8">
              <image href={downIcon} width="8" height="8" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
