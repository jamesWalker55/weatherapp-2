import React, { Component } from 'react';

import './button.css';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  callback = async () => {
    if (this.state.active) return;

    this.setState({ active: true });

    try {
      await this.props.callback();
    } catch (e) {
      console.error(e);
    }

    this.setState({ active: false });
  };

  render() {
    let className;

    if (this.state.active && this.props.animation) {
      className = `button ${this.props.animation}`;
    } else {
      className = 'button';
    }

    return (
      <div title={this.props.name} className={className}>
        <svg className='icon' width="24" height="24">
          <image href={this.props.icon} onClick={this.callback} width="24" height="24" />
        </svg>
      </div>
    );
  }
}
