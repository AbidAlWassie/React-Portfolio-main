import React from 'react'
// import { motion } from 'framer-motion'
// import { images } from '../../constants'

const Header = () => {
  return (
    <header className="header">
      <div className="container flex justify-between items-center mx-auto">

      <div className="showcase-info">
        <h3 className="sub-heading">Web Developer</h3>
        <h3 className="heading">Abid Al Wassie</h3>
        <p className="text">I'm a freelance web developer.</p>
        <div className="cta">
          <a href="null" className="btn">Contact Me</a>
          <a href="null" className="btn secondary-btn">Download CV</a>
        </div>
      </div>

      <div className="showcase-img">
      </div>

      </div>
    </header>
  )
}

export default Header