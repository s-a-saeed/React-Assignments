// This is the running app. You need to modify it to make it modular and do stuff like passing data into 
// components, create Stateless Functional Components where appropriate, add state to components where 
// needed, updating state functionality if state added to component, and create Controlled Components if needed.


import React from 'react';
import Header from './Header'
import DeleteButton from './DeleteButton'
import AddItemForum from './AddItemForum'
import PrintItemList from './PrintItemList'
import './App.css';

class App extends React.Component {
  state = {
    value: '',
    itemList: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState(oldState => ({itemList: [...oldState.itemList, this.state.value],}));
    //this.setState({itemList: [...this.state.itemList, this.state.value],}); Will do the same thing as above
    this.setState({value:""})
  };

  removeLastItem = () => {
    this.setState({ itemList: this.state.itemList.slice(0, -1) });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.itemList.length === 0;
  };

  render() {
    return (
      <div className="App">

        <Header />

        <h2>ToDo List</h2>
        <AddItemForum addNewItem={this.addNewItem} value={this.state.value} handleChange={this.handleChange} inputIsEmpty={this.inputIsEmpty}/>
 
        <DeleteButton noItemsFound={this.noItemsFound} removeLastItem={this.removeLastItem}/>

        <PrintItemList itemList={this.state.itemList}/>
        
      </div>
    );
  }
}

export default App;