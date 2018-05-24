import React from "react";

class Instrument extends React.Component { 
  

  
  render(){

  let instrument = this.props.instrument;
  
    if(instrument === "q"){
      return ( 
        <div>   
          <div>Kick</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "a"){
      return ( 
        <div>   
          <div>Open HH</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "z"){
      return (
        <div>   
          <div>Open HH</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "w"){
      return ( 
        <div>   
          <div>Kick Hat</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "s"){
      return ( 
        <div>   
          <div>Pad 1</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "x"){
      return ( 
        <div>   
          <div>Pad 2</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "e"){
      return ( 
        <div>   
          <div>Pad 3</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "d"){
      return ( 
        <div>   
          <div>Snare</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" autoPlay></audio>
        </div>  
      )
    } 
    
    if(instrument === "c"){
      return ( 
        <div>   
          <div>Clap</div>  
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" autoPlay></audio>
        </div>  
      )
    } 

    return(
      <div>

      </div>
    )
  
  }
}

export default Instrument;