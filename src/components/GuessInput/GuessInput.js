import React from 'react';


export default function GuessInput({handleAddGuess, guesses}){
    const [guess, setGuess] = React.useState('')


    function handleInput(i){
        if (i.length > 5){
            return;
        }
        const newValue = i.toUpperCase()
        setGuess(newValue)
    }
    return (
        <form className="guess-input-wrapper" onSubmit={event => { 
            event.preventDefault()
            handleAddGuess(guess)
            setGuess('')
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" onChange={event => {handleInput(event.target.value)}} value={guess}/>
        </form>
    )
}