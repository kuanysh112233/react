import React from 'react'
import { BrowserRouter, Outlet, Router, useNavigate } from 'react-router-dom'
import Register from './Register'

export default function Login({setAuth}) {
    let navigat = useNavigate()
    const handleClick = () =>{
        setAuth(true)
        navigat('/1')
    }
    
  return (
    <div>
        <button onClick={handleClick}>LOGIN</button>
        <Link>Register</Link>
        <Outlet/>

    </div>
  )
}
