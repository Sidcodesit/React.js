import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, increaseValue] = useState("siddharth")


  function clicked(){
    value = "sid"
    increaseValue(value)
  }

  return (
    <>
    <h1>Counter value {value}</h1>
    <h3>hello</h3>
    <h2>new counter value {value}</h2>
    <button onClick={clicked}>increase counter value</button>
    </>
  )
}

export function Printit(){

  return(
    <h1>hii</h1>
  )
}

export default App    
