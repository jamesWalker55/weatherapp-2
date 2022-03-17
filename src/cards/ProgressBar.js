import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";


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

        // here below is the old progress bar, i think it should stay here in case
        <div> 
            {/* <div className='barBorder'>
                <div className='barColour' style={{width: `${this.state.azimuthVal}%`}}></div>
            </div>  */}
            <div className='semiCircleDiv'>
                <SemiCircleProgressBar 
                percentage={this.state.azimuthVal} 
                strokeWidth={5} 
                stroke={'orange'}
                diameter={400} 
                />
            </div>
            
        </div>
    );
        
    }
    
}

export default ProgressBar;

