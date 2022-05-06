import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { BsGithub, BsYoutube, BsFacebook } from 'react-icons/bs'
// import { HiMail } from 'react-icons/hi'
// import { IoLocationSharp } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className="contact section" id="contact">
        <div className="container mx-auto my-40 w-full">
          <div className="contact-info">
            <div className="sub-heading">Contact</div>
            <div className="heading">Leave a message!</div>
            <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque nobis quod aliquam, magni et. 
            </div>
            
            <div className="v-list">
              <a href="mailto:abidalwassie@outlook.com" className="mail">abidalwassie@outlook.com</a>
              <FaArrowRight className="slide-icon"/>
            </div>

            <div className="social-container-lg mt-14">
              {/* <h3>Follow me:</h3> */}
              <div className="social-icons-lg">
                <a href="url"><BsFacebook/></a>
                <a href="url"><BsYoutube/></a>
                <a href="url"><BsGithub/></a>
              </div>
            </div>
            
          </div>

          <form className="contact-form" action="index.html">

              <h3>Send me a message</h3>
              <input type="text" className="form-input" placeholder="Your name" required/>
              <input type="email" className="form-input" placeholder="Your email" required/>
              <textarea placeholder="Your message" className="form-input" name="" id="" required></textarea>
              <input type="submit" className="btn" placeholder="Send" value="Send Message"/>
            </form>

        </div>
      </div>
  )
}

export default Contact