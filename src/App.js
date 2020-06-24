import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from "./AutoCompleteText";
import countries from './countries'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-Component">
          <h1 id="title">Search country names</h1>
          <div className="App-Component">
            <AutoCompleteText items={countries} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
