import React from 'react'

function Welcome(name,dept,year) {
    const college="kce";
  return (
    <div>
        <h1>Welcome {college}</h1>
        <p>{name},dept of {dept},{year}</p>
    </div>
  )
}

export default Welcome
