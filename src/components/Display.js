import React from "react";
import Instrument from "./Instrument";

class Display extends React.Component {
  
  render(){
    return(
      <div 
        className="display"
        id="display"
      >
        <div id="title">
          Drum Machine 
        </div>
        <div id="details">
          <Instrument
            keyPress={this.props.keyPress}
          />
        </div>
      </div>  
    )
  }
}

export default Display;