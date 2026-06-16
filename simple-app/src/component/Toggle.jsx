import {useState} from 'react'

export default function Toggle() {
    const[mode,setMode]=useState(false)
  return (
    <div style={{backgroundColor:mode?'black':'white',color:mode?'white':'blac',height:"100vh"}}>

        <button onClick={()=>setShow(!show)}>
            {show?"Hide":"show"}
        </button>
            {show&&<p>Hello world</p>}
    </div>
  )
}
