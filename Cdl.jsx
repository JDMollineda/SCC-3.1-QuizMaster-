import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Pages from '../components/Pages'
import './pages.css'
import Testing from '../components/Testing'
import { cdlGeneral, cdlBrakes, cdlCombinations } from '../components/questions'

const Cdl = () => {

  useEffect(()=> {    
    notify()
  }, [])

  const notify = () => { toast.dark("Select a Category", { position: "bottom-center" }) }

  const [showQuestions, setQuestions] = useState(false);
  const [showGeneralQuestions, setGeneralQuestions] = useState(false);
  const [showBrakesQuestions, setBrakesQuestions] = useState(false);
  const [showCombinationsQuestions, setCombinationsQuestions] = useState(false);

  const generalToggler = () => { setGeneralQuestions(true); setBrakesQuestions(false); setCombinationsQuestions(false); setQuestions(true) }
  const brakesToggler = () => { setBrakesQuestions(true); setGeneralQuestions(false); setCombinationsQuestions(false); setQuestions(true) }
  const combinationsToggler = () => { setCombinationsQuestions(true); setBrakesQuestions(false); setGeneralQuestions(false); setQuestions(true) }

  return (
    <div>
      {!showQuestions && (
        <Pages
          image='./assets/images/cdlMain.jpg'
          content=
          <div className='container-fluid hero-content'>
            <div className="row">
              <div className="col-12 hero-text">
                <p className='display-5 hero-p'>Welcome To Your</p>
                <h1 className='hero-h1'>CDL Preparation Test</h1>
                <p className='lead main-phrase'>
                  - Select a Category -
                </p>
                <div className="btn-section">
                  <button className='btn btn-outline-light' onClick={generalToggler}>General Knowledge</button>
                  <button className='btn btn-outline-light' onClick={brakesToggler}>Air Brakes</button>
                  <button className='btn btn-outline-light' onClick={combinationsToggler}>Combinations Vehicles</button>
                </div>
              </div>
            </div>
          </div>
        />
      )}

      {showGeneralQuestions && <Pages
        image='./assets/images/cdlMain.jpg'
        content=<Testing arrQuestions={cdlGeneral} address="/cdl" />
      />
      }
      {showBrakesQuestions && <Pages
        image='./assets/images/cdlMain.jpg'
        content=<Testing arrQuestions={cdlBrakes} address="/cdl" />
      />
      }
      {showCombinationsQuestions && <Pages
        image='./assets/images/cdlMain.jpg'
        content=<Testing arrQuestions={cdlCombinations} address="/cdl" />
      />
      }

    </div>
  )
}

export default Cdl