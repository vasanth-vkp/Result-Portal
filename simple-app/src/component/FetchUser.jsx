import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function FetchUser() {
    const[user,stUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>stUser(data))
    },[])
  return (
    <div>FetchUser
    <h2>User Details</h2>
    <table border={7}>
     
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            {
                user.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </div>
  )
}
