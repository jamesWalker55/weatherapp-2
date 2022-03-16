import React, { Component } from 'react';

import './common.css';

class StarMap extends Component {
  render() {
    return (
      <div className="card">
        Star Map
        <iframe title="Map of stars" width="100%" height="400rem" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://slowe.github.io/VirtualSky/embed?&projection=polar" allowTransparency="true"></iframe>
      </div>
    );
  }
}

export default StarMap;