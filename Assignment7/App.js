// ### Instructions
// create an app in modular form and do stuff like passing data into 
// components, create Stateless Functional Components where appropriate, add state to components where 
// needed, updating state functionality if state added to component, and create Controlled Components if needed.

// **Task**: 
// App should taker user name as input and show the list below as follows

// {user name} has played 0 games.


// Make a button and place it somewhere. Text the button "Hide no of games played by user". When user clicks on 
// that button text of button changes to "Show no of games user played" and the format of list displayed earlier changes to as follows


// {user name} has played * games.

import React, { Component } from 'react';
import Header from './Header';
import SelectGamerForum from './SelectGamerForum';
import PrintGamerInfo from './PrintGamerInfo';
import ToggleButton from './ToggleButton';
import './App.css';

class App extends Component {
  state={gamerList : [
          {name: "Gamer1",score:10},
          {name: "Gamer2",score:20},
          {name: "Gamer3",score:15},
          {name: "Gamer4",score:12},
          {name: "Gamer5",score:17},
          {name: "Gamer6",score:20},
          {name: "Gamer7",score:19},
          {name: "Gamer8",score:7},
          {name: "Gamer9",score:11},
          {name: "Gamer10",score:9},
        ],
        showScore:"",
        selectedGamer: {name: "",score: 0}
      }

  displayGamer =(gamerName) =>{//receives info of gamer selected from SelectGamerForum, searches the gamer in gamerList state to extract information and sets value of selectedGamer in state
      const gamerFound= this.state.gamerList.filter((gamerSearch)=> (gamerSearch.name===gamerName))//searches the gamer in gamerList state and puts the gamers name and score in gamerFound
      this.setState({selectedGamer: {name: gamerFound[0].name,score: gamerFound[0].score}}) //Sets value of selectedGamer with the information in gamerFound
  }

  setToggle = (value) => this.setState({showScore : value})//Simply receives the inverse value from togglebutton and updates the state

  render() {
    return (
      <div>
        <Header/>
        <SelectGamerForum gamerList={this.state.gamerList} displayGamer={this.displayGamer}/>
        <PrintGamerInfo selectedGamer={this.state.selectedGamer} showScore={this.state.showScore} />
        <ToggleButton showScore={this.state.showScore} setToggle={this.setToggle}/>
      </div>
    );
  }
}

export default App;
