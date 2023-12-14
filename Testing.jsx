import React, { useState } from 'react'
import { toast } from 'react-toastify';

import './components.css';

const Testing = (props) => {

    let bestGuy = localStorage.getItem(props.arrQuestions[0].category)

    const notify = () => {
        toast.info(bestGuy == null ? bestGuy = "Cuba is the best in this category" : bestGuy + " is the best in this category", { position: "bottom-center" })
    }

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [bestScore, setBestScore] = useState('')
    const [showInfo, setShowInfo] = useState('')
    // const [highScore, setHighScore] = useState(0)
    const [highScoreName, setHighScoreName] = useState('')


    const optionClicked = (isCorrect) => {
        let temp = props.arrQuestions[currentQuestion].correct_answer
        if (isCorrect === temp) {
            setScore(score + 1);
            ratingScore()
        }
        if (currentQuestion + 1 < props.arrQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalResults(true)
            ratingScore()
            highScoreTable()
            notify()
        }
    }

    const handleData = (e) => {
        e.preventDefault()
        localStorage.setItem(props.arrQuestions[0].category, highScoreName)
        console.log(props.arrQuestions[0].category, highScoreName)
        setShowInfo('visually-hidden')
    }

    const highScoreTable = () => {
        let temp = Math.floor(((score + 1) / props.arrQuestions.length) * 100)
        if (temp !== 100) {
            console.log(temp)
            setShowInfo('visually-hidden')
        }
    }

    const ratingScore = () => {
        let temp = Math.floor((score / props.arrQuestions.length) * 100)

        if (temp < 60) {
            setBestScore('text-danger')
        } else if (temp >= 60 && temp <= 80) {
            setBestScore('text-warning')
        } else {
            setBestScore('text-success')
        }
    }

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
    }

    return (
        <div className='container-fluid text-center main-testing'>
            {/* Header */}
            <div className="row">
                <div className="col-md-12">
                    <h4 className='text-light text-uppercase '> {props.arrQuestions[0].category}</h4>
                    <h5 className={`${bestScore}`}>Current Score: {score}</h5>
                </div>
            </div>
            {showFinalResults ?
                /* Final Result */
                < div className="row">
                    <div className="col-md-12 question-card final-result">
                        <h1 className='display-4'>Final Results</h1>
                        <h2 className={`display-5 ${bestScore}`}>{score} out of {props.arrQuestions.length} Correct - ({Math.floor((score / props.arrQuestions.length) * 100)}%) </h2>
                        <form onSubmit={handleData} className={`${showInfo}`}>
                            <input type="text" className='rounded form-size' placeholder='Enter your Name' onChange={(e) => setHighScoreName(e.target.value)} />
                            <button type='submit' className='form-size form-btn'>Save</button>
                        </form>
                        <button className='btn btn-outline-success' onClick={() => restartQuiz()}>Restart Game</button>
                        <p><small>You need 80% or more to pass</small></p>
                    </div>
                </div>
                :
                /* Question Card*/
                <div className="row">
                    <div className="col-md-12 question-card">
                        <a className='btn btn-close btn-outline-danger closing-btn' href={props.address} />
                        <h5 className='lead'>Question {currentQuestion + 1} out of {props.arrQuestions.length}</h5>
                        <h5 className='question-text'>{props.arrQuestions[currentQuestion]?.question}</h5>
                        <ul className='questionSelection'>
                            {props.arrQuestions[currentQuestion]?.possible_answers.map((option => {
                                return (
                                    <li className='lead answerSelection' onClick={() => optionClicked(option)} key={(Math.random() * props.arrQuestions.length)}>{option} </li>
                                );
                            }))}
                        </ul>
                    </div>
                </div>
            }

        </div >
    )
}

export default Testing