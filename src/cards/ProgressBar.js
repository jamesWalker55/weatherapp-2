import React from "react";


// check the git page for altitude range (0 = horizon, pi/2 is highest point)
// to check wehre on graph it should go, check with time if possible.
var SunCalc = require('suncalc')
var now = new Date()



class ProgressBar extends React.Component {

    state = {
        loading: true,
        azimuthVal: (SunCalc.getPosition(now, 51, 0.15).azimuth) *100 / Math.PI,
      };

    render(){
    return(

        <div>
            <div className='barBorder'>
                <div className='barColour' style={{width: `${this.state.azimuthVal}%`}}></div>
            </div> 
        </div>
    );
        
    }
    
}

export default ProgressBar;

