import React from 'react';

//--------------------WILL DISPLAY THE QUESTION BEING ASKED-------------------------//
const Question =({...props})=> {
  
    const {number1}= props
    const {number2}= props
    const {number3}= props
    const {proposedAnswer}= props
    return (
      <div>
        <h2>ADD THE NUMBERS GAME</h2>
        <div className="equation">
            <p className="text">{`${number1} + ${number2} + ${number3} = ${proposedAnswer}`}</p>
        </div>
      </div>
    );
  
}

export default Question;