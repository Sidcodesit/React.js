import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card username = 'siddharth' age='22'/>
      <Card username = 'paul' age='25'/>
      {/* <Card/>
      <Card/> */}
    </div>
  )
}

export default App