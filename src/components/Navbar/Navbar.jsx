import React from 'react'
import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

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

      <div className='nav-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {
            toggle && (
              <motion.div 
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeInOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}> {item} </a>
                  </li>
                ))}
              </motion.div>
            )
          }
      </div>

    </nav>
  )
}

export default Navbar