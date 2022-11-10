import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useState} from "react"

function App() {
  const [calc, setCalc] = useState("")
  const [answer, setAnswer] = useState("")

  const ops = ["+", "-", "*", "/", "."]

  const updateCalc = (value) => {
    if ((ops.includes(value) && (calc === "")) ||
    (ops.includes(value) && (ops.includes(calc.slice(-1)))))
    {
      return
    }

    setCalc(calc + value)

    if (!ops.includes(value))
    {
      setAnswer(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
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
     
      <div  className='display'>
        <div id='num'>
        {answer ? <span>{answer}</span> : ""} &nbsp;&nbsp;
        {calc || "0"}
        </div>
    <div id='display' > 
        <div className='operators'>
          <button class="btn btn-secondary btn-lg ms-2 mb-2 " onClick={() => updateCalc("+")}>+</button>
          <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("1")}>1</button>
          <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("2")}>2</button>
       
        </div>
        <div id='digits' className='digits'>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("-")}>-</button>
        
       
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("3")}>3</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("4")}>4</button>
        
        </div>
        <div id='digits1' className='digits'>
        <button  class="btn btn-secondary btn-lg ms-2 mb-2"  onClick={() => updateCalc("*")}>*</button>
       
        <button  class="btn btn-secondary btn-lg ms-2 mb-2"onClick={() => updateCalc("5")}>5</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("6")}>6</button>
        </div>
        <div id='digits2' className='digits'>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("/")}>/</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("7")}>7</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc("8")}>8</button>
        
    
        </div>
        <div id='digits3' className='digits'>
        
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={() => updateCalc(".")}>.</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2 "onClick={() => updateCalc("9")}>9</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2"onClick={() => updateCalc("0")}>0</button>
        
       
        </div>
        <div id='digits3' className='digits'>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={calculate}>=</button>
        <button class="btn btn-secondary btn-lg ms-2 mb-2" onClick={deleteChar}>DEL</button>
        </div>
        </div>
      </div>
     </div>
    
  );
}

export default App;