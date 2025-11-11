import React from 'react'
import { MoveUpRight } from 'lucide-react'
import Herotext from './Herotext'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/4 flex flex-col justify-between  rounded-2xl py-2 px-10'>
      <Herotext/>
      <Arrow/>  
    </div>
  )
}

export default Leftcontent 