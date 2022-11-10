import logo from './logo.svg';
import './App.css';
import React,  { useState } from 'react';


function App() {

const [calc, setCalc] = useState("")
const [answer, setAnswer] = useState("")

const ops = ["+", "-", "*", "/", "."]
const updateCalc  = (value) => {
  if ((ops.includes(value) && (calc === "")) || 
  (ops.includes(value) && (ops.includes(calc.slice)(-1)))
  ){
    return
  }
  
    setCalc(calc + value)
  
    if(!ops.includes(value))
    {
      setAnswer(eval(calc + value).tostring())
    }
}

const calculate = () => {
  setCalc(eval(calc).tostring())
}

const deleteChar = () => {
  if(calc === "")
  {
    return
  }
  const value = calc.slice(0, -1)
  setCalc(value)
}


  return (
    <div className="App">
    <div className='wrapper'>
      <div className='display'>
        {answer ? <span>{answer}</span>: ""}&nbsp;nbsp;
        {calc || "0"}
        <div className='operators'>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>

          <button onClick={deleteChar}>DEL</button>
        </div>
        <div className='digits'>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>

        <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    </div>
  );    
}

export default App;
