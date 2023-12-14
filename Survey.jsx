import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
// import { RiSurveyLine, RiSurveyFill } from 'react-icons/ri';
import Pages from '../components/Pages'
import SurveyQuestions from '../components/SurveyQuestions';
import './pages.css'

const Survey = () => {
  useEffect(()=> {    
    notify()
  }, [])

  const notify = () => { toast.dark("Please Make a Choice ", { position: "bottom-center" }) }
  const [showQuestions, setQuestions] = useState(false);

  const toggler = () => { setQuestions(true) };

  return (
    <div>
      {!showQuestions && (
        <Pages
          image='./assets/images/surveyMain.jpg'
          content=
          <div className='container-fluid hero-content'>
            <div className="row">
              <div className="col-12 hero-text">
                <p className='display-5 hero-p dashTest'><a href="./dashboard">Welcome To Our</a></p>
                <h1 className='hero-h1'>Improvement Survey </h1>
                <p className='lead main-phrase'>
                  - Please be Honest on your selection -
                </p>
                <div className="btn-section">
                  <button className='btn btn-outline-light' onClick={toggler}>Click Here When Ready</button>
                  {/* <button className='btn btn-outline-light' onClick={toggler}>Experience  <RiSurveyFill /></button> */}
                </div>
              </div>
            </div>
          </div>
        />
      )}

      {showQuestions && <Pages
        image='./assets/images/surveyMain.jpg'
        content=<SurveyQuestions/>
      />
      }
    </div>
  )
}

export default Survey