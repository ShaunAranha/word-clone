import React from 'react';


export default function Banner({won, answer}){

    return (
        
        <>
        {
          won   
            ? 
        <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong>3 guesses</strong>.
                </p>
        </div> 
            : 
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
        }
        </>
    )
}