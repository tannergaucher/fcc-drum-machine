import React, { Component } from 'react';
import './App.css';
import Pads from "./components/Pads";
import Display from "./components/Display";

class App extends Component {
  
  constructor(){
    super();
    
    this.state = {
      key: []
    }
  }
  
  handleClick = (e) => {
    if (e.target.className === "pad") {
      console.log(e.target.id);
      this.setState({key: [...this.state.key, e.target.id]})
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
          <Display
            keyPress={this.state.key}
          />
        </div>
      </div>
    );
  }
}

export default App;
