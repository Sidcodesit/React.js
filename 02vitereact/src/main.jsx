import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function NewApp(){
  return(
    <div>
      <h1>hello newApp</h1>
    </div>
  )
}

const element = (
  <a href= "https://google.com" target='_blank'>Visit google</a>
)


// const Elements = {
//     type: "div",
//     props:{
//         className:"main-box",
//         id:"box"
//     },
//     Children: "hello my name is sid",
// }
//                             WE CANNOT DEFINE LIKE THIS BECAUSE RENDER NEEDS A PROPER SYNTAX 

// React.createElement()
// in this we have to pass paramter in an order
// 1. type of tag
// 2. HTML attributes 
// 3. inner HTML 

const userName = "sidcodesit"

const oneMoreElement = React.createElement(
  'a',
  {href: "https://google.com",target: '_blank'},
  "click here to visit it",
  // we can set any value also like {username} type
  userName
)


createRoot(document.getElementById('root')).render(
//  <NewApp/>
// element
// oneMoreElement
<App/>
)