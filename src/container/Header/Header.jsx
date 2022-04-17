import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const Header = () => {
  return (
    <div className='header'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-info"
      >

        <div className="header-badge">
          <div className="badge-cmp flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">
                Hello, I'm
              </p>
              <h1 className="head-text text-2xl">Abid</h1>
            </div>
          </div>
        </div>

        <div className="tag-cmp flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </motion.div>

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="header-img"
    >
      <img src={images.profile2} alt="profile"/>
    </motion.div>

    </div>
  )
}

export default Header