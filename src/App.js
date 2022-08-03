import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(1);
  const [Output, setOutput] = useState("")
  const [unrelatedState, setUnrelatedState] = useState(0);

  useEffect(()=>{
    console.log("use effect triggered");
    if (number % 3 === 0 && number % 5 === 0) {
      setOutput("fizzbuz")
    } else if (number % 3 === 0) {
      setOutput("fizz")
    } else if (number % 5 === 0) {
      setOutput("buzz")
    } else {
      setOutput(number);
  }},[number]);

  const unrelatedStateChanged = () => {
    let randomNum = Math.floor(Math.random() * 100);
    setUnrelatedState(randomNum)
  }

  const handleInc = () => {
    setNumber(number + 1);
    }

  const handleDec = () => {
    setNumber(number -1);
  }

  return (
    <div className="App">
      <button value={unrelatedState} onClick={handleDec}> - </button>
      <button value={unrelatedState} onClick={handleInc}> + </button>

      <button value={unrelatedState} onClick={unrelatedStateChanged}> change unrelated state </button>

      <hr></hr>

      <h2> Number is {number}</h2>

      <h2> Answer is {Output} </h2>

      <h3>unrelated state: <span>{unrelatedState}</span></h3>

      <button><a href="https://en.wikipedia.org/wiki/Fizz_buzz#:~:text=Players%20generally%20sit%20in%20a,by%2015%20become%20fizz%20buzz" >Fizz Buzz Instructions</a></button>

    </div>
  );
  }

export default App;
