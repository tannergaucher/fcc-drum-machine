import React, { Component } from 'react';
import './App.css';
import Pads from "./components/Pads";
import Display from "./components/Display";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      key: ""
    }
    
  }
  
  render() {
    
    return (
      <div 
        className="App"
      >
        <div id="drum-machine">
          <Pads
            handleClick={this.handleClick}

          />
          <Display/>
        </div>
      </div>
    );
  }
}

export default App;
