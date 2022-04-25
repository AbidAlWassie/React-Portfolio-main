import React from 'react'

const Work = () => {
  return (
    <div className="work" id="work">
        <div className="container mx-auto w-full">
          
          <div className="portfolio-header">

          <div className="portfolio-title">
            <h3 className="sub-heading">Work</h3>
            <h1 className="heading">Latest Projects</h1>
          </div>
          
          <div className="filter-btns">
            <button className="filter-btn">All</button>
            <button className="filter-btn">Front end</button>
            <button className="filter-btn">Back end</button>
            <button className="filter-btn">Others</button>
          </div>

          </div>

          <div className="portfolio-items hidden"></div>
        </div>
    </div>
  )
}

export default Work