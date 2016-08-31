import React, { Component } from 'react';
//import logo from './logo.svg';
import HeaderBar from './components/headerBar.js';
import Main from './components/main.js';
import './App.css';
import './output.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Main />
      </div>
    );
  }
}

export default App;
