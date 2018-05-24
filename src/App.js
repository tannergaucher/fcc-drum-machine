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
    
   this.handleK = this.handleK.bind(this);
  }
  
  handleClick = (e) =>{
    let key = e.target.id;
    this.setState({key})
  }
  
  handleK = (e) => {
    console.log(e.key)
    this.setState({key: e.key})
  }

    render() {
    
    document.addEventListener('keydown', this.handleK)
    
    return (
      <div 
        className="App"
      >
        <div id="drum-machine">
          <Pads
            handleClick={this.handleClick}
          />
          <Display
            instrument={this.state.key}
            resetState={this.resetState}
          />
        </div>
      </div>
    );
  }
}

export default App;
