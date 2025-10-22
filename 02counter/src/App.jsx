import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)

  // let counter = 5


  return (
    <>
  <h1>New project</h1>
  <h2>counter value: {counter}</h2>

  <button onClick={ ()=> setCounter(counter+1)}>add value {counter}</button>
  <br />
  <p>footer: {counter}</p>
    </>
  )
}

export default App
