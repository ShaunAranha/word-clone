import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
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

  function handleAddGuess(guess){
    if (numOfGuesses === NUM_OF_GUESSES_ALLOWED ){
      return;
    }

    setNumOfGuesses(numOfGuesses + 1)


    const newGuesses = [...guesses]
    newGuesses[numOfGuesses] = guess
    setGuesses(newGuesses)
  }
  return <>
  <GuessResults guesses={guesses}/>
  <GuessInput handleAddGuess={handleAddGuess}/></>;
}

export default Game;
