// src/Project.js

import React from 'react'
import { Link } from 'react-router-dom'


function FoodList(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="FoodList">
    <h1>
    <Link to={`/details/${id}`}>
    {name}
    </Link>
    </h1>
     <Link to={`/details/${id}`}>
     <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
     </Link>
     <div>{address}</div>
     <div>{hours}</div>
   </div>
  )
}

export default FoodList
