import React from 'react';
import './components.css';
import Typical from 'react-typical';


const Hero = () => {
  return (
    <div className='container-fluid hero-content'>
      <div className="row">
        <div className="col-12 hero-text">
          <p className='display-5 hero-p'>Welcome To Your</p>
          <h1 className='hero-h1'>Second Chance Center</h1>
          <Typical
            steps={[
              "Self Improvement",
              20000,
              "Career Trades",
              10000,
              "Motivational Events",
              7000,
              "Job Fairs",
              6000,              
            ]}
            loop={Infinity}
            wrapper="p"
          />
          <p className='lead main-phrase'>
            - Opportunities don't happen, YOU Create Them! -
          </p>
          <a className='btn btn-outline-light' href="/survey"> Take a Survey</a>
        </div>
      </div>
    </div>
  )
}

export default Hero