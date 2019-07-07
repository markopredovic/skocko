import React, {Component}  from "react";
import "./App.css";
import Skocko from './components/Skocko/Skocko'


class App extends Component {

  state = {

  } 


  render () {
    return (
      <div className="App">
        <h1>1. Github finder app - using github API</h1>
        <h1>2. Skocko game</h1>

        <Skocko />

      </div>
    );
  }
  
  }


export default App;
