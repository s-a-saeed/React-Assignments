/*### Instructions

**Task**: This app should reflect all the text you typed in input field. If there is nothing in input box, nothing should be printed to the page.

Remember forms in react component could also controls what happens in that form when user inputs something.

This exercise all about Controlled Components.*/

import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Controller from './Controller';
import Output from './Output';

class App extends Component {
  state={enteredText:""}
  controlFunc =(text)=>{
    this.setState({enteredText: text})//updates state using value received from Controller
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Controller controlFunc={this.controlFunc}/>
          <Output textDisplay={this.state.enteredText}/>{/*sends state to output so that it can be displayed*/}
        </div>
      </div>
    );
  }
}

export default App;