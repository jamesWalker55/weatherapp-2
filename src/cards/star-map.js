import React, { Component } from 'react';

import './common.css';
import './star-map.css';

class StarMap extends Component {
  render() {
    return (
      <div className="card dark star-map">
        <h2>Star Map (Interactive)</h2>

        <div className='frame-container'>
          <iframe
            width="100%"
            height="400rem"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://slowe.github.io/VirtualSky/embed?&projection=stereo&keyboard=false&showstarlabels=true&showdate=false&showposition=false&live=true&az=336.5" />
        </div>
      </div>
    );
  }
}

export default StarMap;