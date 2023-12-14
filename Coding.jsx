import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Pages from '../components/Pages'
import './pages.css'
import Testing from '../components/Testing'
import { htmlQuestions, cssQuestions, jsQuestions } from '../components/questions'

const Coding = () => {
  useEffect(() => {
    notify()
  }, [])

  const notify = () => { toast.dark("Select a Category", { position: "bottom-center" }) }

  const [showQuestions, setQuestions] = useState(false);
  const [showHtmlQuestions, setHtmlQuestions] = useState(false);
  const [showCssQuestions, setCssQuestions] = useState(false);
  const [showJsQuestions, setJsQuestions] = useState(false);

  const htmlToggler = () => { setHtmlQuestions(true); setCssQuestions(false); setJsQuestions(false); setQuestions(true) }
  const cssToggler = () => { setCssQuestions(true); setHtmlQuestions(false); setJsQuestions(false); setQuestions(true) }
  const jsToggler = () => { setJsQuestions(true); setCssQuestions(false); setHtmlQuestions(false); setQuestions(true) }

  return (
    <div>
      {!showQuestions && (
        <Pages
          image='./assets/images/codingMain.jpg'
          content=
          <div className='container-fluid hero-content'>
            <div className="row">
              <div className="col-12 hero-text">
                <p className='display-5 hero-p'>Welcome To Your</p>
                <h1 className='hero-h1'>Web Developer Test</h1>
                <p className='lead main-phrase'>
                  - Select a Category -
                </p>
                <div className="btn-section">
                  <button className='btn btn-outline-light' onClick={htmlToggler}>HTML</button>
                  <button className='btn btn-outline-light' onClick={cssToggler}>CSS</button>
                  <button className='btn btn-outline-light' onClick={jsToggler}>JavaScript</button>
                </div>
              </div>
            </div>
          </div>
        />
      )}

      {showHtmlQuestions && <Pages
        image='./assets/images/codingMain.jpg'
        content=<Testing arrQuestions={htmlQuestions} address="/coding" />
      />
      }
      {showCssQuestions && <Pages
        image='./assets/images/codingMain.jpg'
        content=<Testing arrQuestions={cssQuestions} address="/coding" />
      />
      }
      {showJsQuestions && <Pages
        image='./assets/images/codingMain.jpg'
        content=<Testing arrQuestions={jsQuestions} address="/coding" />
      />
      }

    </div>
  )
}

export default Coding