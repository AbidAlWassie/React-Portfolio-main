import React from 'react'

import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar