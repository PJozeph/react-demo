import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: '#eeee'}}>
       <Counter />
      </div>
    );
  }
}

export default App;
