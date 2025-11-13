import React from 'react'

const App = () => {

  function clicked(){
    console.log("i m clicked");
    
  }

  function changed(){
    console.log("i m changed");
    
  }

  function inputChanged(val){
    console.log(val);
    
  }
  return (
   <div>
     <div>      
      <button onClick={clicked} className='bg-black text-white p-2 m-10 rounded-xl border-2 border-red-600'>Click Here</button>
      <button onClick={()=>{console.log("clicked on me");
      }} className='bg-black text-white p-2 m-10 rounded-xl border-2 border-red-600'>Click Here</button>
      <br />
      <input  onChange={(element)=>{inputChanged(element.target)}} className='pt-2 pl-2 pb-1 ml-5 border-2 border-white' type="text" placeholder='Enter Your Name' />
    </div>
    <div className='h-[100px] w-[100px] bg-red-600' onMouseMove={(elem)=>{console.log(elem);
    }}>
      
    </div>
   </div>
  )
}

export default App  