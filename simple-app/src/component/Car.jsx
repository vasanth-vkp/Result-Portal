import React from 'react'
import img from '../assets/img.jpg'

export default function Car() {
    const car={
        name:"Creta",
        color:"white",
        price:"15 lakhs",
        pic:img
    }
  return (
    <div>
        <p>Car Details</p>
        <img src={car.pic}height="50"></img>
        <p>name:{car.name}</p>
        <p>Color:{car.color}</p>
        <p>Price:{car.price}</p>
    </div>
  )
}
