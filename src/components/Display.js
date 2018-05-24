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
          {this.props.details}
          <Instrument
            instrument={this.props.instrument}
          />
        </div>
      </div>  
    )
  }
}

export default Display;