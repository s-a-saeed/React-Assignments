import React from 'react';
import './App.css';

//-----------------------------WILL SELECT GAMER USINg DROPDOWN MENU-----------------------------------

const SelectGamerForum = (props) => {
  const sendValue = ()=> {//Using displayGamer function, this function sends back which gamer has been selected from dropdown menu
    const displayGamer = props.displayGamer//displayGamer function was received as props
    displayGamer(document.getElementById("dropBox").value)//sending value of dropbox
  }
    return (
      <div className="SingleRow">
        <p>Select Gamer Username:</p>
        <select className="dropper" id="dropBox" onChange={sendValue}>
            <option value="" selected disabled hidden>Please select</option>{/*adds default option for dropbox*/}
            {props.gamerList.map((item, index) => <option key={index}>{item.name}</option>)}{/*Adds other options from the gamerList state array as dropbox options*/}
        </select>
      </div>
    );
}

export default SelectGamerForum;