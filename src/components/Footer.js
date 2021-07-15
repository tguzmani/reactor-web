import React from 'react'
import { Link } from 'gatsby'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>Let's Make Your Dreams Come True</div>

        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/about-us'>About Us</Link>
          <Link to='/contact-us'>Contact Us</Link>
        </div>

        <div className='icons'>
          <FaFacebookF className='icon' size='1.5em' />
          <FaTwitter className='icon' size='1.5em' />
          <FaInstagram className='icon' size='1.5em' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
