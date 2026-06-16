import React from 'react'

export default function Courses() {
    const course=["java","python","DS","Wad"]
  return (
    <div>
        <h3>List OF Courses</h3>
        <ul>
            {course.map((c,index)=>(
                <li key={index}>{c}</li>
            ))}
        </ul>
    </div>
  )
}
