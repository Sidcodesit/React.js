import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color,setColor] = useState("white")
  return (
    <div className='h-screen w-full duration-200' style={{backgroundColor: color}}>
      <div className=' flex flex-wrap fixed left-10 top-10 justify-center'>
        <div className='flex flex-wrap flex-col justify-center gap-5 shadow-lg bg-white rounded-2xl px-3 py-2'>
          <button className='bg-red-500  outline-none px-2 py-2 rounded-2xl text-white shadow-lg' onClick={()=>setColor("red")}>Red</button>
          <button className='bg-blue-500 outline-none px-2 py-2 rounded-2xl text-white shadow-lg'onClick={()=>setColor("blue")}>Blue</button>
          <button className='bg-green-500 outline-none px-2 py-2 rounded-2xl text-white shadow-lg' onClick={()=>setColor("green")}>green</button>
          <button className='bg-pink-500 outline-none px-2 py-2 rounded-2xl text-white shadow-lg' onClick={()=>setColor("pink")}>pink</button>
          <button className='bg-yellow-400 outline-none px-2 py-2 rounded-2xl text-white shadow-lg' onClick={()=>setColor("yellow")}>yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App  