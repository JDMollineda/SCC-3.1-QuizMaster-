import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Pages from '../components/Pages'
import './pages.css'
import Testing from '../components/Testing'
import { ckQuestions } from '../components/questions'

const Ckitchen = () => {
  useEffect(()=> {    
    notify()
  }, [])

  const notify = () => { toast.dark("Begin Test when Ready", { position: "bottom-center" }) }
  const [showQuestions, setQuestions] = useState(false);

  const toggler = () => { setQuestions(true) };
  
  return (
    <div>
       {!showQuestions && (
        <Pages
          image='./assets/images/ckMain.jpg'
          content=
          <div className='container-fluid hero-content'>
            <div className="row">
              <div className="col-12 hero-text">
                <p className='display-5 hero-p'>Welcome To Your</p>
                <h1 className='hero-h1'>Food Handler's Card Test</h1>
                {/* <p className='lead main-phrase'>
                  - Select a Category -
                </p> */}
                <div className="btn-section">
                  <button className='btn btn-outline-light' onClick={toggler}>Begin Test</button>
                 
                </div>
              </div>
            </div>
          </div>
        />
      )}

      {showQuestions && <Pages
        image='./assets/images/ckMain.jpg'
        content=<Testing arrQuestions={ckQuestions} address="/kitchen" />
      />
      }
    </div>
  )
}

export default Ckitchen