import './App.css'
import {useState} from "react";

function App() {

    let [counter, setCounter] = useState(0);

    console.log(`mount`)

  return (
    <>
        <h2>{counter}</h2>

      <button onClick={()=>{
          setCounter(++counter);
      }}>increment</button>


      <button onClick={()=>{
          setCounter(prevState => {
              return --prevState
          });
      }}>decrement</button>

    </>
  )
}

export default App
