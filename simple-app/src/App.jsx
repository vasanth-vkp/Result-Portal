import React from 'react'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
import Home from './component/Home'
import Result from './component/Result'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <nav className='navBar'>
        <NavLink ro='/'>
        Home
        </NavLink>
      </nav>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/result/:regno"element={<Result/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
