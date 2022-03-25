import React, { Component } from 'react';

import './button.css';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  /** wrapper for the callback to handle potential errors, and to prevent clicking the button again while active */
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

    // when the button is active, add the animation class to it
    // animations are defined in button.css
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
