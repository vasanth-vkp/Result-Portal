import React from 'react'
import { useEffect } from 'react';

export default function PaswordCheck() {
    const [password, setPassword] = React.useState("");
    const [msg, setMsg] = React.useState("");
    useEffect(() => {
        if (password.length < 8) {
            setMsg("Password must be at least 8 characters long");
        } else {           
             setMsg("Password is strong");
        }           
    }, [password])
        
  return (
    <>
    <input type="password" placeholder='Enter your password'onChange={(e) => (e.target.value)} />
    <p>{msg}</p>

    </>
  )
}