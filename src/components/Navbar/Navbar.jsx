import React from 'react'
import { useState } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='nav-list'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='nav-links' key={`link-${item}`}>
            <a href={`#${item}`}> {item} </a>
            <div/>
          </li>
        ))}
      </ul>

      <div className='menuBtn'>
        <HiOutlineMenu onClick={toggleNav} />
      </div>

      <div className={toggle ? "nav-menu slideIn" : "nav-menu slideBack"}>

          
          <ul className='sideMenu'>
            
            <div className='closeBtn'>
            <HiX onClick={toggleNav} />
            </div>

            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={toggleNav}> {item} </a>
              </li>
            ))}
          </ul>

      </div>

    </nav>
  )
}

export default Navbar