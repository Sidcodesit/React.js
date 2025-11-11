import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
   const users =[
      {
        img:'https://images.unsplash.com/photo-1762776345918-dbc968a5fcb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'Satisfied'
      },
         {
        img:'https://images.unsplash.com/photo-1762779943612-02464f850c54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'UnderServed'
      },
         {
        img:'https://images.unsplash.com/photo-1762664390334-c691800e0968?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'Underbanked'
      },
         {
        img:'https://images.unsplash.com/photo-1762661122540-10645eafc95c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'Underbanked'
      },
         {
        img:'https://images.unsplash.com/photo-1759609448122-74b9289aa99e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'Underbanked'
      },
         {
        img:'https://images.unsplash.com/photo-1762632173940-d08a7b9a19b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'Underbanked'
      },
         {
        img:'https://images.unsplash.com/photo-1758565811272-e79917ca0adc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600',
        intro:'',
        tag:'Underbanked'
      },
    ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App