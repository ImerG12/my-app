// src/MainList.js
import FoodList from './FoodList';
import React from 'react';
import './MainList.css'
import data from './sffoodies-data.json'

function MainList() {

const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
    <FoodList
       id={i}
       key={title}
       name={title}
       address={address}
       image={images[0]}
       hours={hours}
     />
   )
 })

  return (
        <div className="MainList">
          { spaces }
        </div>
      )
    }


export default MainList
