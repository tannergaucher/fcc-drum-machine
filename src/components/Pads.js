import React from "react";

class Pads extends React.Component {
  
  // oscillatorWave = (hertz) =>{
  //   hertz = this.state.key;
  //   var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  //   // create Oscillator node
  //   var oscillator = audioCtx.createOscillator();
  //   oscillator.type = 'square';
  //   oscillator.frequency.setValueAtTime(hertz, audioCtx.currentTime); // value in hertz
  //   oscillator.connect(audioCtx.destination);
  //   oscillator.start();
  //   oscillator.stop(audioCtx.currentTime + 2)
  // }
  
  render(){
    
    return(
      <div 
        id="pads"
        onClick={this.props.handleClick}
      >
        <div className="pad" id="kick"></div>  
        <div className="pad" id="openHH"></div>
        <div className="pad" id="pad1"></div>
        <div className="pad" id="closedHH"></div> 
        <div className="pad" id="kickHat"></div>  
        <div className="pad" id="pad2"></div>  
        <div className="pad" id="snare"></div>  
        <div className="pad" id="clap"></div>  
        <div className="pad" id="pad3"></div>
      </div>
    )
  }
}

export default Pads;