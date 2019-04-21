import React from 'react';


//--------------------WILL DISPLAY BUTTONS AS WELL AS TELL APP WHICH BUTTON WAS PRESSED-------------------------//
const Buttons = ({...props}) => {
  
    const {NewGen}= props
    
    const TrueButton = () => {
     NewGen("True")//Will simply tell NewGen Function in app which button was pressed
    }
  
    const FalseButton = () => {
      NewGen("False")//Will simply tell NewGen Function in app which button was pressed
      }
    
    return (
      <div>
        <button onClick={TrueButton}>True</button>
        <button onClick={FalseButton}>False</button>
      </div>
    );
  }

  export default Buttons;