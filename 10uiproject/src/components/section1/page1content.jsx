import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Page1content = (props) => {
    console.log(props);
    
  return (
    <div className='py-10 px-18 h-[90vh]  flex gap-10 items-center'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content 