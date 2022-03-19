import React, { Component } from 'react';
import RiseSetInfo from './parts/rise-set-info';

import './common.css';
import './sun-and-moon-alt.css';

import activeArc from 'assets/sun-moon-active.png';
import inactiveArc from 'assets/sun-moon-inactive.png';
import sunIcon from 'assets/sun-solid.svg';
import moonIcon from 'assets/moon-solid.svg';

class Arc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      now: Date.now() / 1000,
      activeIndicator: null,
    };
  }

  // make this component redraw itself every second
  componentDidMount() {
    // callback to update `this.state.now` and `this.state.activeIndicator` regularly
    const callback = () => {
      const now = Date.now() / 1000;

      const riseSetTimes = this.props.riseSetTimes;
      let activeIndicator;

      if (riseSetTimes.sun[0] <= now && now < riseSetTimes.sun[1]) {
        activeIndicator = 'sun';
      } else if (riseSetTimes.moon[0] <= now && now < riseSetTimes.moon[1]) {
        activeIndicator = 'moon';
      } else {
        activeIndicator = null;
      }

      this.setState({
        now: now,
        activeIndicator: activeIndicator,
      });
    };

    // call on startup to set the state immediately
    callback();

    this.intervalId = setInterval(
      callback,
      30000  // miliseconds
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // return the progress of the arc as a number between 0 and 1
  getProgress() {
    if (!this.state.activeIndicator) return 0;

    const riseSetTimes = this.props.riseSetTimes;

    if (this.state.activeIndicator === 'sun') {
      return (this.state.now - riseSetTimes.sun[0]) / (riseSetTimes.sun[1] - riseSetTimes.sun[0]);
    } else {
      return (this.state.now - riseSetTimes.moon[0]) / (riseSetTimes.moon[1] - riseSetTimes.moon[0]);
    }
  }

  render() {
    if (!this.state.activeIndicator) {
      // not displaying sun or moon

      return (
        <div className='arc-container'>
          <img src={inactiveArc} className='arc inactive' />
        </div>
      );
    } else {
      // displaying either sun or moon

      const progress = this.getProgress();
      const arcClipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;

      return (
        <div className='arc-container'>
          <img src={activeArc} className='arc active' style={{ clipPath: arcClipPath }} />
          <img src={inactiveArc} className='arc inactive' />
          <ArcIcon icon={this.state.activeIndicator === 'sun' ? sunIcon : moonIcon} progress={progress} />
        </div>
      );
    }

  }
}

class ArcIcon extends Component {
  // given the progress from 0 to 1, calculate the x, y position of the icon
  getArcIconPosition(progress) {
    // constants
    const xMin = -0.02;
    const xMax = 0.972;
    const yMin = 0.12;
    const yMax = 1.08;
    const c = -0.189;
    const s = 3.2;
    const w = 0.93;

    // position of icon, from 0.0 to 1.0
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
  getRiseSetTimes = () => {
    const now = this.props.apiData.current.dt;
    const days = this.props.apiData.daily;

    const times = {
      sun: null,
      moon: null,
    };

    for (let i = 0; i < days.length; i++) {
      if (now < days[i].sunset) {
        times.sun = [days[i].sunrise, days[i].sunset];
        break;
      }
    }

    for (let i = 0; i < days.length; i++) {
      if (now < days[i].moonset) {
        if (i > 0) {
          times.moon = [days[i - 1].moonrise, days[i].moonset];
        } else {
          times.moon = [days[i].moonrise - 86400, days[i].moonset];
        }
        break;
      }
    }

    return times;
  };

  render() {
    const riseSetTimes = this.getRiseSetTimes();

    return (
      <div className="card sun-and-moon">
        <h2>Sun and Moon</h2>

        <Arc riseSetTimes={riseSetTimes} />

        <div className='rise-set-times'>
          <RiseSetInfo icon={sunIcon} riseTime={riseSetTimes.sun[0]} setTime={riseSetTimes.sun[1]} />
          <RiseSetInfo icon={moonIcon} riseTime={riseSetTimes.moon[0]} setTime={riseSetTimes.moon[1]} />
        </div>
      </div>
    );
  }
}
