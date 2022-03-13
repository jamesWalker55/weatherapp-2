import { div } from 'prelude-ls'
import React from 'react';

export default class fetchSunriseTime extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
    }
    
    render() {
        return <div>
            {this.state.loading ? <div>loading...</div> : <div>person...</div>}

        </div>
    }
}