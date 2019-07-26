import React, {Component} from 'react';
//import React from 'react';
import './App.css';
import classname from 'classnames'


function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}

class Grid extends React.Component {
  state = {press: true}

  
  render() {
    return (
      <button 
        className={classname({
          "buttonClass1":this.state.press,
          "buttonClass2":!this.state.press
        })}
        onMouseDown={() => {this.setState(prevstate => ({press: !prevstate.press}))}}
        onMouseUp={() => {this.setState(prevstate => ({press: !prevstate.press}))}}
      >
        Test
      </button>
    )
  }
}

export default App;
