import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const[numOfGuesses, setNumOfGuesses] = React.useState(0)
  const [guesses, setGuesses] = React.useState(["","","","","",""])
  const [endGame,setEndGame] = React.useState(false)
  const [won,setWon] = React.useState(false)

  function handleAddGuess(guess){
    setNumOfGuesses(numOfGuesses + 1)
    const newGuesses = [...guesses]
    newGuesses[numOfGuesses] = guess
    setGuesses(newGuesses)
    if (guess === answer){
      setEndGame(true)
      setWon(true)
    }

    if (numOfGuesses === NUM_OF_GUESSES_ALLOWED ){
      setEndGame(true)
      setWon(false)
    }
 
  }
  return <>
  <GuessResults guesses={guesses} answer={answer}/>
  <GuessInput handleAddGuess={handleAddGuess} endGame={endGame}/>
  {
    endGame ? <Banner won={won} answer={answer} /> : ''
  }
  </>;
}

export default Game;
