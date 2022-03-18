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
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="http://slowe.github.io/VirtualSky/embed?&projection=stereo&keyboard=false&showstarlabels=true&showdate=false&showposition=false&live=true&az=336.5"
            allowTransparency="true" />
        </div>
      </div>
    );
  }
}

export default StarMap;