import { div } from 'prelude-ls';
import React from 'react';
import imagePath from './sun-moon-images/sun-stencil.png';

export default class FetchSunriseTime extends React.Component {
  state = {
    loading: true,
    sunriseTime: null,
    sunsetTime: null,
  };

  async componentDidMount() {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=0.1276&appid=b94e53a435a10994c9f671ff48ecbc39';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ sunriseTime: new Date(data.current.sunrise * 1000), loading: false });
    this.setState({ sunsetTime: new Date(data.current.sunset * 1000), loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.sunriseTime || !this.state.sunsetTime ?
          <div>loading...</div>
          :
          <div>
            <img class='sunStencil' src={imagePath}></img>
            <div class='sunriseTimeDiv'>
              {/* <br></br> */}
              {(this.state.sunriseTime.toLocaleTimeString("en-US"))} ↑
              <br></br>
              {(this.state.sunsetTime.toLocaleTimeString("en-US"))} ↓
            </div>
          </div>
        }
      </div>
    );
  }
}