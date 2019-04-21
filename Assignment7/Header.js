import React from 'react';
import logo from './logo.svg';

//-----------------------------WILL DISPLAY HEADER ONLY-----------------------------------
const Header = () => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is assignment 7</h1>        
      </header>
    );
}

export default Header;