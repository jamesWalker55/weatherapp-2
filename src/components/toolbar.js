import React, { Component } from 'react';

import Button from './parts/button';

import './toolbar.css';

import refreshIcon from 'assets/arrows-rotate-solid.svg';
import locationIcon from 'assets/location-dot-solid.svg';

export default class Toolbar extends Component {
  render() {
    return (
      <div className='toolbar'>
        <Button name="Change location" icon={locationIcon} callback={this.props.locationCallback} />
        <Button name="Refresh" icon={refreshIcon} callback={this.props.refreshCallback} animation='rotate' />
      </div>
    );
  }
}
