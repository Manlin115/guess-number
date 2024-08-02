import React from 'react'

export default function Result({term, secretNumber}) {
let result;
     if(term){

        if(term > secretNumber)
        {
            result='Higher';
        }else if(term< secretNumber){
            result='Lower';
        }else if(term = secretNumber){
            result=" Wow you got it !!!"
        }else{
            result='Enter valid inputs'
        }
    }

  return (
    <>
    <h3>Your Guessed: {result}</h3>
    </>
    
  )
}
