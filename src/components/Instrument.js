import React from "react";

class Instrument extends React.Component { 
    
  render(){
    
    const instruments = [
      { instrument: "kick", key: "q", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
      { instrument: "openHH", key: "a", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
      { instrument: "closedHH", key: "z", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
      { instrument: "kickHat", key: "w", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
      { instrument: "pad1", key: "s", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
      { instrument: "pad2", key: "x", clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
      { instrument: "pad3", key: "e", clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
      { instrument: "snare", key: "d", clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
      { instrument: "clap", key: "c", clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
    ];
    
    //match to key instead of target.id
    
    function getClip(e) {
      const match = instruments.filter(instrument => instrument.key === e.target.id);
      
      if(e.target.className === "pad") {
        
        console.log(match);
        console.log(match[0].instrument);
        console.log(match[0].clip);
        // return match[0].clip;
        // return (<div>{match[0].instrument}</div>)
        
      }
    }
    
    return ( 
      <div>   
        <div>test</div>  
      </div>  
    )
  }
}

export default Instrument;