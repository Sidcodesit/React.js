import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full px-4 py-5 w-3/4 flex gap-10 overflow-x-auto flex-nowrap rounded-2xl'>
         {props.users.map(function(data,idx){
           return <Rightcard key={idx} id={idx} img={data.img} tag={data.tag} intro={data.intro} />
         })}          
    </div>
  )
}

export default Rightcontent 