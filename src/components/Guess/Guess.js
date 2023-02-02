import React from 'react';



export default function Guess({guess}){
    return(
        <>
            <span className="cell">{guess[0]}</span>
            <span className="cell">{guess[1]}</span>
            <span className="cell">{guess[2]}</span>
            <span className="cell">{guess[3]}</span>
            <span className="cell">{guess[4]}</span>
        </>
    )
}