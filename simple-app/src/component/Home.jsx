import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function Home() {
    const[regno,setRegno]=useState("");
    const[error,setError]=useState("")
    const navigate=useNavigate("")
    const searchResult=()=>{
    if(regno.trim()==""){
        setError("register Number required")
    }
    navigate(`/result/${regno}`
    )
}
  return (
    <div>
      <h1>Karpagam college of engineering</h1>
      <h2>Student Result Portal</h2>
      <input type="text"
      value={regno}
      placeholder="Enter Register Number"
      onChange={(e)=>setRegno(e.target.value)}/>
      <button onClick={searchResult}>View Result</button>

    </div>
  )
}
