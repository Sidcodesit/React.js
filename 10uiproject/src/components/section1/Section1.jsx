import React from 'react'
import Navbar from './navbar'
import Page1content from './page1content'

const Section1 = () => {
  return (
    <div  className='h-screen w-full'>
      <Navbar/>
      <Page1content></Page1content>
    </div>
  )
}

export default Section1 