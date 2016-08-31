import React, { Component } from 'react';
//import logo from './logo.svg';
import HeaderBar from './components/headerBar.js';
import Main from './components/main.js';
import RightMenu from './components/rightMenu';
import './App.css';
import './output.css';

class App extends Component {

  constructor(props){
  	super(props);

  	this.state={
  		toggled: true
  	}
  }

  render() {
    return (
      <div className="App">
      	<div className={this.state.toggled ? "primaryOpen" : "primaryClosed"}>
        	<HeaderBar isOpen={true} />
        	<Main />
        </div>
        <div className={this.state.toggled ? "secondaryOpen" : "secondaryClosed"}>  
        	<RightMenu />
        </div>
      </div>
    );
  }
}

export default App;
