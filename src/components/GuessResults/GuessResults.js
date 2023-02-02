import React from 'react';
import Guess from '../Guess';


export default function GuessResults({guesses}){
    return (
        <div className="guess-results">
            {
                guesses.map((guess, index)=> {
                    return (
                    
                    <p className="guess" key={index}><Guess guess={guess} /></p>
                    )
                })
            }
        </div>
    )
}