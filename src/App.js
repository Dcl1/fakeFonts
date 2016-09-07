import React, { Component } from 'react';
//import logo from './logo.svg';
import HeaderBar from './components/headerBar.js';
import Main from './components/main.js';
import RightMenu from './components/rightMenu';
import FontShelf from './components/fontShelf';
import './App.css';
import './output.css';

class App extends Component {

  constructor(props){
  	super(props);

  	this.state={
  		toggled: true,
      isUp: false
  	}
  }

  componentWillReceiveProps(nextProps){
    console.log("Inside App.js " + nextProps.isOpen);
  }


  render() {
    return (
      <div className="App">
      	<div className={this.props.isOpen ? "primaryOpen" : "primaryClosed"}>
        	<Main />
        </div>
        <div className={this.props.isOpen ? "secondaryOpen" : "secondaryClosed"}>  
        	<RightMenu />
        </div>

        <div className={this.state.isUp ? "overlay" : "off"}>

        </div>

        <FontShelf />


      </div>
    );
  }
}

export default App;
