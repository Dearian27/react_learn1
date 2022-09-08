import React, {useState} from 'react'

export const Counter = (props) => {

  const [counter, setcounter] = useState(0);

  function increment() {
    setcounter(counter + 1)
   }
 
   function decrement() {
     setcounter(counter - 1)
   }

   
  return(
    <div>
        <p><span>{counter}</span></p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;    