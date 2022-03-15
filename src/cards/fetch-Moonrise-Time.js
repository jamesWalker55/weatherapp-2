import { div } from 'prelude-ls'
import React from 'react';
import imagePath from './sun-moon-images/moon-stencil.png';




export default class FetchMoonriseTime extends React.Component {
    state = {
        loading: true,
        moonriseTime: null,
        moonsetTime: null,
    }

    async componentDidMount() {
        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=0.1276&appid=b94e53a435a10994c9f671ff48ecbc39';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({moonriseTime: new Date(data.daily[0].moonrise * 1000), loading: false})
        this.setState({moonsetTime: new Date(data.daily[0].moonset * 1000), loading: false})
    }
    
    render() {
        return <div>
            {this.state.loading || !this.state.moonriseTime || !this.state.moonsetTime ?
             <div>loading...</div>
              :
               <div>
                   <img class='moonStencil' src={imagePath}></img>
                   <div class='sunsetTimeDiv'>
                    {/* <br></br> */}
                    {(this.state.moonriseTime.toLocaleTimeString("en-US"))} ↑
                    <br></br>
                    {(this.state.moonsetTime.toLocaleTimeString("en-US"))} ↓
                    </div>
                </div>
                }

        </div>
    }
}