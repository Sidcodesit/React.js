#  My React Notes

React is a library of javascript which is created by facebook for building UIs, fast updates without reloading the whole page

# Command for creating react app (old method)

npx create-react-app 


# Vite 

vite is basically a bundler which create a react project folder for us and gives us so many features

# Command for creating vite folder

npm create vite@latest


# Import and Export

we can import and export functions

example

```jsx
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1 className='nav'>Navbar</h1>
    </div>
  )
}

export const Game = function(){
    return(
        <h1 className='games'>games</h1>
    )
}

export default Navbar
```

```jsx
import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar'
import { Game } from '../components/navbar'

const App = () => {
  return (
    <div>
      <Card/>
      <Navbar/>
      <Game/>
    </div>
  )
}

export default App   
```

# Diffrence between Real DOM and virtual DOM
⚡ Real DOM vs Virtual DOM
| **Real DOM**                      | **Virtual DOM**                 |
| --------------------------------- | ------------------------------- |
| Updates the whole UI.             | Updates only changed parts.     |
| Slower performance.               | Faster performance.             |
| Directly changes the browser DOM. | Changes a copy in memory first. |
| Used in normal JS.                | Used in React.                  |

# hooks

Hooks = Functions that make functional components powerful like class components

# useState

 **`useState()`**    | To add **state** (data that changes) to a component.        



```jsx
import { useState } from 'react'

function App() {
  let [counter,setCounter] = useState(5)

  // let counter = 5


  return (
    <>
  <h1>New project</h1>
  <h2>counter value: {counter}</h2>

  <button onClick={ ()=> setCounter(counter+1)}>add value {counter}</button>
  <p>footer: {counter}</p>
    </>
  )
}

```


# 🧵 React Fiber

React fibre is responsible for virtual dom and it is developed by React core team.


It’s the new core engine of React (from React 16+).

Makes rendering faster and smoother.

Breaks rendering work into small units (fibers) so React can pause, resume, or stop work — useful for animations and large UIs.

Enables asynchronous rendering → React stays responsive even during heavy updates.

# 🔄 Reconciliation

It’s the process React uses to compare the old Virtual DOM with the new one.

React finds the differences (diffing) and updates only the changed parts in the Real DOM.

This makes updates efficient and fast.