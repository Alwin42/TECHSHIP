import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
  
  function increment()
  {
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  function reset()
  {
    setCount(0);
  }
  function handleInputChange(event) {
    setCount(Number(event.target.value));
  }
  
  return (
  <>
    <div>Counter Application</div><br></br>
    <h2>Enter the number : </h2> <input type="number" id="num" value={count} onChange={handleInputChange} />
    <h2>Current Count: {count} </h2><br></br>
    <button onClick={increment}>Increment</button><br></br>
    <button onClick={decrement}>Decrement</button><br></br>
    <button onClick={reset}>Reset</button><br></br>
  </>
)
}

export default Counter