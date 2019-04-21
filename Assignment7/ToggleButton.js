import React from 'react';

//-------------DISPLAYS AND SETS TOGGLE BUTTON STATUS-----------------------------//

const ToggleButton = (props) => {
    const {showScore}=props//receives current status using props
    const toggle = () => props.setToggle(!showScore)//sends back reverse value of current status to set new toggle value, using setToggle function received from parent
    const buttonText=(showScore===true)//changes value of text displayed on toggle button based on current toggle status
                     ?"Hide no of games played by user"
                     :"Show no of games user played"
    return (
       <button onClick={toggle}>{buttonText}</button> //Onclick will send back the reverse toggle value using toggle function defined above
    );
}

export default ToggleButton;