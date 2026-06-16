import React from 'react'
export default function Greeting() {
    const hour=new Date().getHours();
    const greeting=hours<12
    ?"Good Morning"
    
    :hours<17
    ?"Good Afternoon"
    :"Good EVening";
  return (
    <div>
        <p>Hi,{greeting}</p>
    </div>
  );
}

