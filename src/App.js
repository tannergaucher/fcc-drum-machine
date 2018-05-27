import React, { Component } from 'react';
import './App.css';
import Pads from "./components/Pads";
import Display from "./components/Display";

class App extends Component {

  render() {
            
    return (
      <div 
        className="App"
      >
        <div id="drum-machine">
          <Pads
          />
          <Display
          />
        </div>
      </div>
    );
  }
}

export default App;
