import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
      <Link to={'/1'}>Home</Link>
      <Link to={'/posts'}>Posts</Link>
    </nav>
  )
}
