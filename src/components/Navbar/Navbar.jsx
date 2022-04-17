import React from 'react'
import { useState } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

// import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(true);

  const toggleNav = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        
      <div className='circle'><span className="firstLetter">A</span><div className="half-circle"></div></div>
      <span className="otherLetters" draggable="false">bid</span>
      </div>
      <ul className='nav-list'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='nav-links' key={`link-${item}`}>
            <a href={`#${item}`}> {item} </a>
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