import React from 'react';
import {checkGuess} from '../../game-helpers.js'


export default function Guess({guess, answer}){
    const checkedGuess = checkGuess(guess, answer)
    console.log(checkedGuess)
    return(
        <>
            <span className={`cell ${checkedGuess && checkedGuess[0].status}`}>{guess[0]}</span>
            <span className={`cell ${checkedGuess && checkedGuess[1].status}`}>{guess[1]}</span>
            <span className={`cell ${checkedGuess && checkedGuess[2].status}`}>{guess[2]}</span>
            <span className={`cell ${checkedGuess && checkedGuess[3].status}`}>{guess[3]}</span>
            <span className={`cell ${checkedGuess && checkedGuess[4].status}`}>{guess[4]}</span>
        </>
    )
}