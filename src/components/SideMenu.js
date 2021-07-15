import React from 'react'

import { BiMenu, BiX } from 'react-icons/bi'
import { Link } from 'gatsby'

const SideMenu = () => {
  const [show, setShow] = React.useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div id='side-menu'>
      {show && (
        <div
          className='panel'
          role='button'
          tabIndex={0}
          onClick={toggleShow}
          onKeyDown={toggleShow}
        >
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/about-us'>About Us</Link>
        </div>
      )}

      <div className='menu-icon'>
        {!show ? (
          <BiMenu size='2em' onClick={toggleShow} />
        ) : (
          <BiX size='2em' onClick={toggleShow} />
        )}
      </div>
    </div>
  )
}

export default SideMenu
