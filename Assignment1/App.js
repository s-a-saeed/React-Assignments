<<<<<<< HEAD
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

Please make sure that your application must be modular.

This exercise will help you practice almost all the topics we have learned so far specially state management one.
   */

  import React, { Component } from 'react';
  import logo from './logo.svg';
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

      componentDidMount() {
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
  
      NewGen = (which)=>{
        let totalQuestions=0
        let correctAnswers=0
        const rand1 = Math.floor(Math.random() * 100);
        const rand2 = Math.floor(Math.random() * 100);
        const rand3 = Math.floor(Math.random() * 100);
        const randAnswer = Math.floor(Math.random() * 3) + rand1 + rand2 + rand3;
        if(((which=="True") && (this.state.number1+this.state.number2+this.state.number3==this.state.proposedAnswer))||
           ((which=="False") && (this.state.number1+this.state.number2+this.state.number3!==this.state.proposedAnswer)))
           {
              totalQuestions=this.state.numQuestions+1
              correctAnswers=this.state.numCorrect+1
              console.log("correct")
           }
           else{
              totalQuestions=this.state.numQuestions+1
              correctAnswers=this.state.numCorrect
              console.log("Wrong")
           }
        
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
  
  
  class Header extends Component {
    
    render() {
      return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is assignment 4</h1>        
        </header>    
      );
    }
  }
  
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
  
  const Buttons = ({...props}) => {
  
    const {NewGen}= props
    
    const TrueButton = () => {
     NewGen("True")
    }
  
    const FalseButton = () => {
      NewGen("False")
      }
    
    return (
      <div>
        <button onClick={TrueButton}>True</button>
        <button onClick={FalseButton}>False</button>
      </div>
    );
  }
  
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
  
  
  export default App;
  
  
  
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
>>>>>>> Initial commit from Create React App
