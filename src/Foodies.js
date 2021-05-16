// src/Foodies.js

import React from 'react'

import data from './sffoodies-data.json'

function Foodies(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, hours, features, geo  } = data[id]

  return (
    <div>

        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />



        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>


  )
}

export default Foodies
