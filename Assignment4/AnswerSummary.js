import React from 'react';

//--------------------WILL DISPLAY THE CURRENT SCORE-------------------------//
const AnswerSummary = ({...props}) => {
    const {numCorrect}=props
    const {numQuestions}=props
    return (
      <div className="game">
      <p className="text">
        You have answered {numCorrect} question answered correctly out of total {numQuestions} questions.
      </p>
  </div>
    );
  }

  export default AnswerSummary;