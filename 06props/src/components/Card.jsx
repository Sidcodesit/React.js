import React from 'react'

const Card = (props) => {
  return (
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1761061581558-61f7f1c41bd6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632" alt="" />
        <h1>{props.username}</h1>
        <p>My age is {props.age}</p>
        <button>view profile</button>
      </div>
  )
}

export default Card