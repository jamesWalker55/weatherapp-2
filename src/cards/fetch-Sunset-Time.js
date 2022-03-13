import { div } from 'prelude-ls'
import React from 'react';
import imagePath from './sun-moon-images/sun-stencil.png'



export default class FetchSunsetTime extends React.Component {
    state = {
        loading: true,
        time: null,
    }

    async componentDidMount() {
        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=0.1276&appid=b94e53a435a10994c9f671ff48ecbc39';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({time: new Date(data.current.sunset * 1000), loading: false})

    }
    
    render() {
        return <div>
            {this.state.loading || !this.state.time ?
             <div>loading...</div>
              :
               <div>
                   <img class='moonStencil' src={imagePath}></img>
                   <div class='sunsetTimeDiv'>Sunset: <br></br>{(this.state.time.toLocaleTimeString("en-US"))}</div>
                </div>
                }

        </div>
    }
}