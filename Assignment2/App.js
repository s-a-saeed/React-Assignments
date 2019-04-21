   /*
# Instructions

Let's do something a little bit more complicated. Instead of displaying a
list of users and their movies, this time you need to display a list of movies.

For each book in the list, there are two options:

1. If the book has been liked by any of the peeps, then display a list of all of the peeps who said that they liked that book.
2. If the book has *not* been liked, display some text stating that no one liked this book.

As you go about tackling this project, try to make the app *modular* by breaking it into resusable React components.

## Example


<h2>Imran Series</h2>
<p>Liked By:</p>
<ul>
  <li>Fazal Deen</li>
</ul>

<h2>Jokes 101</h2>
<p>Liked By:</p>
<ul>
  <li>Muneeb</li>
  <li>Osama</li>
</ul>

<h2>I Am Malala</h2>
<p>None of the peeps in the chart liked this book</p>

*/

import React, { Component } from 'react';
import './App.css';
import Display from './Display.js';



class App extends Component {
  render() {
 
const chart = [
  {
    id: 1,
    peepsID: '1',
    bookLikedID: '1',
  },
  {
    id: 2,
    peepsID: '2',
    bookLikedID: '1',
  },
  {
    id: 3,
    peepsID: '4',
    bookLikedID: '5',
  },
  {
    id: 4,
    peepsID: '5',
    bookLikedID: '2',
  },
  {
    id: 5,
    peepsID: '3',
    bookLikedID: '5',
  },
  {
    id: 6,
    peepsID: '6',
    bookLikedID: '4',
  },
];

const peeps = {
  1: {
    id: 1,
    name: 'Fazal Deen',
    readerCategory: 'champ',
  },
  2: {
    id: 2,
    name: 'Irfan',
    readerCategory: 'rising-star',
  },
  3: {
    id: 3,
    name: 'Muneeb',
    readerCategory: 'beginner',
  },
  4: {
    id: 4,
    name: 'Osama',
    readerCategory: 'champ',
  },
  5: {
    id: 5,
    name: 'Najam',
    readerCategory: 'champ',
  },
  6: {
    id: 6,
    name: 'Aamir',
    readerCategory: 'beginner',
  },
};

const books = {
  1: {
    id: 1,
    name: 'Imran Series',
  },
  2: {
    id: 2,
    name: 'Harry Potter',
  },
  3: {
    id: 3,
    name: 'I Am Malala',
  },
  4: {
    id: 4,
    name: 'Bang-e-Dara by Allama Iqbal',
  },
  5: {
    id: 5,
    name: 'Jokes 101',
  },
};

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            This is Assignment 2
          </h1>
          <div>
            {

              Object.keys(books).map((bookEntry)=>//As the result will be deisplayed for each book object(id and name).Map will be applied on books
              
               <Display chart={chart} books={books} peeps={peeps} bookEntry={bookEntry}/>//This will send each books name(map) along with all the linking info of 3 variables to display
              
              )
              
            }
          </div>
        </header>
      </div>
    );
  }
}


export default App;


