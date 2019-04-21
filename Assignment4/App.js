   /*
### Instructions

You're given a starter template with dummy data.

**Task**: You will be creating a "ADD THE NUMBERS GAME" in which you will display 
three random number and proposed answer on the screen. This proposed number 
could by right answer or could be wrong

You would be creating two buttons to guess the answer 1) True 2) False

By looking at a proposed answer from the screen, user will judge for its correctness
based on that judgement answer could be true or false (in both case user answer can
be count correct or incorrect)

There will be a score counter along with total number of question asked in a following manner

You have answered [user score count] question answered correctly out of total [total question count] questions.

Basic working is also provided in App.js file. 

Please make sure that your application must be modular

This exercise will help you practice almost all the topics we have learned so far specially state management one.
   */

  import React, { Component } from 'react';
  import Header from './Header.js'
  import Question from './Question.js'
  import Buttons from './Buttons.js'
  import AnswerSummary from './AnswerSummary.js'
 
  import './App.css';
  
  
  
  
  
  class App extends Component {
    state={
      numQuestions:0,
      numCorrect:0,
      number1: 0,
      number2: 0,
      number3: 0,
      proposedAnswer: 0,
      };

      componentDidMount() {//will initiate and then SET the random values for state for the first time ONLY
          const number1 = Math.floor(Math.random() * 100);
          const number2 = Math.floor(Math.random() * 100);
          const number3 = Math.floor(Math.random() * 100);
          const proposedAnswer = parseInt(
            Math.floor(Math.random() * 3) +
              number1 +
              number2 +
              number3
          );
          this.setState({
            number1,
            number2,
            number3,
            proposedAnswer
          });
      }
  
      NewGen = (which)=>{//Will update state and display it on the push of the button each time
        //below two variables will be used to update the count of total question count and correct answer count
        let totalQuestions=0
        let correctAnswers=0
        //below 4 statements will generate new values to be displayed as state
        const rand1 = Math.floor(Math.random() * 100);
        const rand2 = Math.floor(Math.random() * 100);
        const rand3 = Math.floor(Math.random() * 100);
        const randAnswer = Math.floor(Math.random() * 3) + rand1 + rand2 + rand3;
        //below conditions will check if the users answer is right or wrong based o the true or false button they pressed
        if(((which=="True") && (this.state.number1+this.state.number2+this.state.number3==this.state.proposedAnswer))||
           ((which=="False") && (this.state.number1+this.state.number2+this.state.number3!==this.state.proposedAnswer)))
           {
             //If answer is right then update the values of total questions and correct answers using the current state 
              totalQuestions=this.state.numQuestions+1
              correctAnswers=this.state.numCorrect+1
           }
           else{
             //If answer is right then update the values of total questions and correct answers using the current state
              totalQuestions=this.state.numQuestions+1
              correctAnswers=this.state.numCorrect
           }
        //Once all new values for state are deteremined using above calculations update state  
        this.setState({numQuestions:totalQuestions, numCorrect:correctAnswers, number1:rand1, number2:rand2,number3:rand3,proposedAnswer:randAnswer})
      }
  
    render() {
      return (
        <div className="App">
          <Header/>
          <Question number1={this.state.number1} number2={this.state.number2} number3={this.state.number3} proposedAnswer={this.state.proposedAnswer}/>
          <Buttons NewGen={this.NewGen}/>
          <AnswerSummary numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
      );
    }
  }
    
  export default App;
  
  
  