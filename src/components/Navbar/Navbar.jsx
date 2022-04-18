import React from 'react'
import { useState } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { MdOutlineDarkMode } from 'react-icons/md'

// import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(true);

  const toggleNav = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <nav className='navbar w-full'>
      <div className="container flex justify-between items-center mx-auto text-center">
      <div className='navbar-logo'>
        
      <div className='circle'><span className="firstLetter">A</span><div className="half-circle"></div></div>
      <span className="otherLetters" draggable="false">bid</span>
      </div>
      <ul className='nav-list'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='nav-link' key={`link-${item}`}>
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>

      <div className='toggleBtn'>
        <MdOutlineDarkMode/>
      </div>

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

    </div>
    </nav>
    
  )
}




window.addEventListener("scroll", stickyNav);

function stickyNav() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.pageYOffset > 0);
  // console.log(window.pageYOffset > 0);
}



export default Navbar