import React, { useState, useEffect } from 'react';
import Pages from '../components/Pages';
import MicrosoftClasses from '../components/MicrosoftClasses';
import ExcelClasses from '../components/ExcelClasses';
import { toast } from 'react-toastify';
import './pages.css';

const Microsoft = () => {
  useEffect(() => {
    notify()
  }, [])

  const [showMain, setMain] = useState(true);
  const [showWord, setWord] = useState(false);
  const [showExcel, setExcel] = useState(false);

  const toggler = () => { setMain(false); setWord(true) };
  const toggler1 = () => { setMain(false); setExcel(true) };

  const notify = () => { toast.dark("Select a Category", { position: "bottom-center" }) }

  return (
    <div>
      {showMain && (
        <Pages
          image='./assets/images/microsoftMain.jpg'
          content=
          <div className='container-fluid hero-content'>
            <div className="row">
              <div className="col-12 hero-text">
                <p className='display-5 hero-p'>Welcome To Your</p>
                <h1 className='hero-h1'>Microsoft Office Course</h1>
                <small>Easy to follow steps to walk you trough the lessons. </small>
                <small>Learn from videos and tests provided in each lesson</small>
                <p className='lead main-phrase'>
                  - Select a Category -
                </p>
                <div className="btn-section">
                  <button className='btn btn-outline-light' onClick={toggler}>Microsoft Word</button>
                  <button className='btn btn-outline-light' onClick={toggler1}>Microsoft Excel</button>
                </div>
              </div>
            </div>
          </div>
        />
      )}

      {showWord && <Pages
        image='./assets/images/microsoftMain.jpg'
        content=<MicrosoftClasses />
      />
      }
      {showExcel && <Pages
        image='./assets/images/microsoftMain.jpg'
        content=<ExcelClasses />
      />
      }

    </div>
  )
}

export default Microsoft