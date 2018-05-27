import React from "react";

class Pads extends React.Component {
  
  handler = (e) => {
    if(e.target.childNodes[1].className === "clip") {
      let audioElement = e.target.childNodes[1];
      if(audioElement){
        audioElement.play();
      } 
    }
  }
  
  handleKey = (e) => {
    let press = e.key;
    let isInstrument =  /[qazwsxedc]/g;
    let keyTest = press.search(isInstrument);
    
    if(keyTest >= 0){
      let instrument = e.key.toUpperCase();
      let audioElement = document.getElementById(instrument);
      console.log(audioElement)
      //create new audioElement
      let audio = document.createElement('audio');
      audio.src = audioElement.src
      audio.autoPlay = true;
      audio.play();
      audioElement.play();  
    }
 }
  
  render(){
        
    document.addEventListener('keydown', this.handleKey)

    return(
      <div 
        id="pads"
        onClick={this.handler}
        >
        <div className="drum-pad">Q
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className="clip"></audio>
        </div>  
        <div className="drum-pad">A
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="A" className="clip"></audio>
        </div>
        <div className="drum-pad">Z
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="Z" className="clip"></audio>
        </div>
        <div className="drum-pad">W
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="W" className="clip"></audio>
        </div> 
        <div className="drum-pad">S
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className="clip"></audio>
        </div>  
        <div className="drum-pad">X
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="X" className="clip"></audio>        
        </div>  
        <div className="drum-pad" id="e">E
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="E" className="clip"></audio>        
        </div>  
        <div className="drum-pad">D
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="D" className="clip"></audio>        
        </div>  
        <div className="drum-pad">C
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className="clip"></audio>        
        </div>
      </div>       
    )
  }
}

export default Pads;