import React from 'react'

const Card = (props) => {
  return (
     <div className="card">
        <img src={props.path} alt=''/>
       <h1>{props.name}</h1> 

       <p>{props.about}</p>
       <button> View Profile</button>
      </div>
  )
}

export default Card
