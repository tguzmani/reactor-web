import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import useResponsive from '../hooks/useResponsive'
import SideMenu from './SideMenu'

const Navigation = () => {
  const isMobile = useResponsive()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = event => {
    setIsScrolled(window.scrollY > 180)
  }

  return (
    <nav className={isScrolled && 'nav-scrolled'}>
      <div className='nav-container'>
        <div className='header'>
          <StaticImage src='../images/logo.png' width={48} className='logo' />
          <h1>
            REACTOR <span className='lean'>WEB </span>
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
            <button className='ml-3 btn btn-primary btn-big'>Contact Us</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
