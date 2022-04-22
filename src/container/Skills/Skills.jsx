import React from 'react'

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
          {/* <div className="skills-wrap"> */}
            <div className="skills-wrap">

              <div className="skill">
                <div className="sk-progress">
                  <svg>
                    <circle cx={75} cy={75} r={68}/>
                  </svg>
                  <h2 className="counter">
                    <span>89</span>%
                  </h2>
                </div>
                <div className="sk-title">HTML5</div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg>
                    <circle cx={75} cy={75} r={68}/>
                  </svg>
                  <h2 className="counter">
                    <span>89</span>%
                  </h2>
                </div>
                <div className="sk-title">CSS3</div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg>
                    <circle cx={75} cy={75} r={68}/>
                  </svg>
                  <h2 className="counter">
                    <span>89</span>%
                  </h2>
                </div>
                <div className="sk-title">JavaScript</div>
              </div>

              <div className="skill">
                <div className="sk-progress">
                  <svg>
                    <circle cx={75} cy={75} r={68}/>
                  </svg>
                  <h2 className="counter">
                    <span>89</span>%
                  </h2>
                </div>
                <div className="sk-title">UI Design</div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills