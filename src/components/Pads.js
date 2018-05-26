import React from "react";

class Pads extends React.Component {
  
  render(){

    return(
      <div 
        id="pads"
        onClick={this.props.handleClick}
        >
        <div className="pad" id="q"></div>  
        <div className="pad" id="a"></div>
        <div className="pad" id="z"></div>
        <div className="pad" id="w"></div> 
        <div className="pad" id="s"></div>  
        <div className="pad" id="x"></div>  
        <div className="pad" id="e"></div>  
        <div className="pad"id="d"></div>  
        <div className="pad" id="c"></div>
      </div>       
    )
  }
}

export default Pads;