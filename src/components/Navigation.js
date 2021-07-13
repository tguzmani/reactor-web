import React from 'react'
import { Link } from 'react-router-dom'
import { StaticImage } from 'gatsby-plugin-image'
import useResponsive from '../hooks/useResponsive'
import SideMenu from './SideMenu'

const Navigation = () => {
  const isMobile = useResponsive()

  return (
    <nav>
      <div className='nav-container'>
        <div className='header'>
          <StaticImage src='../images/logo.png' width={48} className='logo' />
          <h1>
            REACTOR <span className='lean'>WEB</span>
          </h1>
        </div>

        {isMobile ? (
          <SideMenu />
        ) : (
          <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact-us'>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
