import React from 'react'
// import { motion } from 'framer-motion'
import { images } from '../../constants'


const Header = () => {
  return (
    <header className="header section" id="home">
      <img src={images.square1} className="shape square" alt="" />
      <div className="container flex justify-between items-center mx-auto">
      <div className="showcase-info">
        <h3 className="sub-heading">Web Developer</h3>
        <h1 className="heading">Abid Al Wassie</h1>
        <p className="text">I'm a freelance web developer.</p>
        <div className="cta">
          <a href="mailto:abidalwassie@outlook.com" className="btn">Contact Me</a>
          <a href={images.email} download className="btn secondary-btn">Download CV</a>
        </div>
      </div>

      <div className="showcase-img">
        <img src={images.profile3} className="person" alt="Abid" />
        <img src={images.circle1} className="shape circle" alt="circle" />
        <img src={images.dots} className="shape dots" alt="dots" />
      </div>

      </div>
    </header>
  )
}

export default Header