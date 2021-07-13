import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </ul>
    </nav>
  )
}

export default Navigation
