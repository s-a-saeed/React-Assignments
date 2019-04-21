import React, { Component } from 'react';
import logo from './logo.svg';


//--------------------WILL DISPLAY HEADER ONLY-------------------------//
class Header extends Component {
    
    render() {
      return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is assignment 5</h1>        
        </header>    
      );
    }
  }
  
  export default Header;