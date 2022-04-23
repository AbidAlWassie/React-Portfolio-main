import React from 'react'
import { images } from '../../constants'

const Skills = () => {
  return (
    <div className="about" id="about">
      <div className="container flex justify-between items-center mx-auto">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">My Skills</h3>
            <h1 className="heading">Looking forward to work with you!</h1>
            <div className="box-desc">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reiciendis, a voluptas voluptatibus ducimus animi placeat. Iusto rerum placeat beatae, eaque repudiandae dolores commodi rem, voluptatum exercitationem earum, nihil libero!
              </div>
            </div>
          </div>
            <div className="skills-wrap">

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle1">
                    <circle className="p-circle1" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <img src={images.html} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="90">0</span>%
                  </h2>
                <div className="sk-title">HTML5</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle2">
                    <circle className="p-circle2" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <img src={images.css} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="80">0</span>%
                  </h2>
                <div className="sk-title">CSS3</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle3">
                    <circle className="p-circle3" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <img src={images.javascript} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="70">0</span>%
                  </h2>
                <div className="sk-title">JavaScript</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle4">
                    <circle className="p-circle4" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <img src={images.react} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="45">0</span>%
                  </h2>
                <div className="sk-title">React</div>
                </div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg className="p-circle5">
                    <circle className="p-circle5" cx={75} cy={75} r={68}/>
                  </svg>
                  <div className="techLogo">
                    <img src={images.laravel} alt="" />
                  </div>
                  <h2 className="counter">
                    <span data-target="65">0</span>%
                  </h2>
                <div className="sk-title">Laravel</div>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}



export default Skills