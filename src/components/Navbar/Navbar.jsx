import React from 'react'

import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='nav-list'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='nav-links' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar