import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
    <h3>{props.company}<span>{props.date}</span></h3>
    <h2>{props.post}</h2>
    <div className='tag'>
      <h4>{props.tag1}</h4>
      <h4>{props.tag2}</h4>
    </div>
        </div>
        <div className="bottom">
      <h3>{props.pay}<p>{props.loaction}</p></h3>
    <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card