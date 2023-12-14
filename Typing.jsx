import React, { useState } from 'react'
import './pages.css'
import Pages from '../components/Pages'
import SpeedTyping from '../components/SpeedTyping';

const Typing = () => {
    const [showQuestions, setQuestions] = useState(false);
    const toggler = () => { setQuestions(true) };

    return (
        <div>
            {!showQuestions && (
                <Pages image='./assets/images/dashBoard.jpg'
                    content=
                    <div className='container-fluid hero-content'>
                        <div className="row">
                            <div className="col-12 hero-text dashTest">
                                <p className='display-5 hero-p'>Welcome To Our</p>
                                <h3 className='hero-h1'>Typing Section</h3>
                                <div className="btn-section">
                                    <button className='btn btn-outline-light' onClick={toggler}>Begin Test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                />
            )
            }
            {
                showQuestions && <Pages
                    image='./assets/images/dashBoard.jpg'
                    content=<SpeedTyping />
                />
            }
        </div>
    )
}

export default Typing