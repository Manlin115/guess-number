import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNumber= Math.floor(Math.random() * 10) +1;
function App() {
	const[term,setTerm]=useState(" ")

	const handelChange = (e)=> {
		setTerm(e.target.value)

	}

  return (
    <div className="contianer">
		<div className='head'>
			<label htmlFor='term' >Guess the number between 1 to 10 </label>
		</div>
		<input id='term' 
		type='text'
		name='term'
		onChange={handelChange}
		/>
		<Result secretNumber={secretNumber} term={term}/>
    </div>
  );
}

export default App;
