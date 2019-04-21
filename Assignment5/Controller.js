import React, { Component } from 'react';

/*---------------SENDS ENTERED TEXT TO UPDATE STATE----------------*/
class Controller extends Component {
    sendtext=()=>{
        const control=this.props.controlFunc//receives function from Parent so that it can be used to send back value
        control(document.getElementById("textBox").value)//sends back value using function received from parent
    }
    render() {
               
        return (
            <input id="textBox" type="text" placeholder="Write your text here" onChange = {this.sendtext}/>
        );
    }
}

export default Controller;