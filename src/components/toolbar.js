import React, { Component } from 'react';

import Button from './parts/button';

import './toolbar.css';

import refreshIcon from '../assets/arrows-rotate-solid.svg';

export default class Toolbar extends Component {
  refresh = async () => {
    await this.props.refreshCallback();
  }

  render() {
    return (
      <div className='toolbar'>
        <Button name="Refresh" icon={refreshIcon} callback={this.refresh} animation='rotate' />
      </div>
    );
  }
}
