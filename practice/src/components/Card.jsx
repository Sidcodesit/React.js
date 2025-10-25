import React from 'react'

const Card = (properties) => {
  return (
    <div>
         <div className="card">
        <div className="top">
          <img src={properties.brandLogo} alt="" />
          <h1>{properties.companyName}</h1>
        </div>
        <div className="center">
          <h2>{properties.post}</h2>
          <h5>{properties.datePosted}</h5>
          </div>
        <div className="tags">
          <h3>{properties.tag1}</h3>
          <h3>{properties.tag2}</h3>
        </div>
        <div className="bottom">
          <p>{properties.pay}</p> 
          <h2>{properties.location}</h2>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card