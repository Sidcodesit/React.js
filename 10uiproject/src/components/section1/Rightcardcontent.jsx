import React from 'react'
import { ArrowRight } from 'lucide-react'
const Rightcardcontent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 text-2xl font-bold flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className=' text-white text-lg leading-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi accusantium consequatur ipsam! Impedit, expedita quisquam?</p>
                <div className='flex justify-between mt-5' >
                    <button className='text-white bg-blue-600 font-semibold px-7 py-0.5 rounded-full'>{props.tag}</button>
                    <button className='text-white bg-blue-600 font-semibold px-4 py-4 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent