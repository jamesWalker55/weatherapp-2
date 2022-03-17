import React, { Component } from 'react';
import RiseSetInfo from './parts/rise-set-info';

import './common.css';
import './sun-and-moon-alt.css';

import activeArc from '../assets/sun-moon-active.png';
import inactiveArc from '../assets/sun-moon-inactive.png';
import sunIcon from '../assets/sun-solid.svg';
import moonIcon from '../assets/moon-solid.svg';

class Arc extends Component {
  // make this component redraw itself every second
  // updates this.state.now
  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ now: Date.now() / 10 }),
      20  // miliseconds
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // temp, replace later
  getProgress() {
    if (!this.state) return 0;

    const progress = (this.state.now % 100) / 100;

    return progress;
  }

  render() {
    const progress = this.getProgress();

    const arcClipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;

    return (
      <div className='arc-container'>
        <img src={activeArc} className='arc active' style={{ clipPath: arcClipPath }} />
        <img src={inactiveArc} className='arc inactive' />
        <ArcIcon icon={sunIcon} progress={progress} />
      </div>
    );
  }
}

class ArcIcon extends Component {
  /** progress is a number from 0 to 1 */
  getArcIconPosition(progress) {
    // constants
    const xMin = -0.02;
    const xMax = 0.972;
    const yMin = 0.12;
    const yMax = 1.08;
    const c = -0.189;
    const s = 3.2;
    const w = 0.93;

    // position of sun, from 0.0 to 1.0
    const xPre = progress;
    const yPre = s * (c + Math.sqrt(0.25 - ((progress - 0.5) * w) ** 2));

    const x = xPre * (xMax - xMin) + xMin;
    const y = 1 - (yPre * (yMax - yMin) + yMin);

    return [x, y];
  }

  render() {
    const [x, y] = this.getArcIconPosition(this.props.progress);

    return (
      <svg className='icon' width="20" height="20" style={{ top: `${y * 100}%`, left: `${x * 100}%` }}>
        <image href={this.props.icon} width="20" height="20" />
      </svg>
    );
  }
}

export default class SunAndMoonAlt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card sun-and-moon">
        <h2>Sun and Moon</h2>

        <Arc />

        <div className='rise-set-times'>
          <RiseSetInfo icon={sunIcon} riseTime={1647537662949} setTime={1647537662949 + 60 * 5} />
          <RiseSetInfo icon={moonIcon} riseTime={1647537662949} setTime={1647537662949 + 60 * 5} />
        </div>
      </div>
    );
  }
}
