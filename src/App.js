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

  componentDidMount() {
    var c = this.refs.test
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
  }
  
  render() {
    return (
        <canvas ref='test' height={500} width={900} />
    )
  }
}

export default App;
