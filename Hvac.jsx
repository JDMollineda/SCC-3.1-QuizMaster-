import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Pages from '../components/Pages'
import './pages.css'
import Testing from '../components/Testing'
import { hvacCore, hvacGeneral, hvacType1, hvacType2, hvacType3 } from '../components/questions'

const Hvac = () => {
  useEffect(() => {
    notify()
  }, [])

  const notify = () => { toast.dark("Select a Category", { position: "bottom-center" }) }

  const [showQuestions, setQuestions] = useState(false);
  const [showCoreQuestions, setCoreQuestions] = useState(false);
  const [showGeneralQuestions, setGeneralQuestions] = useState(false);
  const [showType1Questions, setType1Questions] = useState(false);
  const [showType2Questions, setType2Questions] = useState(false);
  const [showType3Questions, setType3Questions] = useState(false);

  const coreToggler = () => { setCoreQuestions(true); setGeneralQuestions(false); setType1Questions(false); setQuestions(true); setType2Questions(false); setType3Questions(false) }
  const generalToggler = () => { setGeneralQuestions(true); setCoreQuestions(false); setType1Questions(false); setQuestions(true); setType2Questions(false); setType3Questions(false) }
  const type1Toggler = () => { setType1Questions(true); setGeneralQuestions(false); setCoreQuestions(false); setQuestions(true); setType2Questions(false); setType3Questions(false) }
  const type2Toggler = () => { setType2Questions(true); setGeneralQuestions(false); setCoreQuestions(false); setQuestions(true); setType1Questions(false); setType3Questions(false) }
  const type3Toggler = () => { setType3Questions(true); setGeneralQuestions(false); setCoreQuestions(false); setQuestions(true); setType1Questions(false); setType2Questions(false) }

  return (
    <div>
      {!showQuestions && (
        <Pages
          image='./assets/images/hvacMain.jpg'
          content=
          <div className='container-fluid hero-content'>
            <div className="row">
              <div className="col-12 hero-text">
                <p className='display-5 hero-p'>Welcome To Your</p>
                <h1 className='hero-h1'>HVAC EPA Test</h1>
                <p className='lead main-phrase'>
                  - Select a Category -
                </p>
                <div className="btn-section">
                  <button className='btn btn-outline-light' onClick={coreToggler}>Core</button>
                  <button className='btn btn-outline-light' onClick={generalToggler}>General</button>
                  <button className='btn btn-outline-light' onClick={type1Toggler}>Type I</button>
                  <button className='btn btn-outline-light' onClick={type2Toggler}>Type II</button>
                  <button className='btn btn-outline-light' onClick={type3Toggler}>Type III</button>
                </div>
              </div>
            </div>
          </div>
        />
      )}

      {showCoreQuestions && <Pages
        image='./assets/images/hvacMain.jpg'
        content=<Testing arrQuestions={hvacCore} address="/hvac" />
      />
      }
      {showGeneralQuestions && <Pages
        image='./assets/images/hvacMain.jpg'
        content=<Testing arrQuestions={hvacGeneral} address="/hvac" />
      />
      }
      {showType1Questions && <Pages
        image='./assets/images/hvacMain.jpg'
        content=<Testing arrQuestions={hvacType1} address="/hvac" />
      />
      }
      {showType2Questions && <Pages
        image='./assets/images/hvacMain.jpg'
        content=<Testing arrQuestions={hvacType2} address="/hvac" />
      />
      }
      {showType3Questions && <Pages
        image='./assets/images/hvacMain.jpg'
        content=<Testing arrQuestions={hvacType3} address="/hvac" />
      />
      }

    </div>
  )
}

export default Hvac