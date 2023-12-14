import React, { useState } from 'react'
import { BiSad, BiHappy, } from 'react-icons/bi';
import './components.css';

const surveyQuestions = [
    {
        "question": "1.	Do you have good expectations for this program?",        
    },
    {
        "question": "2.	Are you confident in achieving your personal goals through this program?",
    },
    {
        "question": "3.	Are you excited about mandatory workouts?",
    },
    {
        "question": "4.	Are you motivated to make positive changes?",
    },
    {
        "question": "5.	How happy are you with your current support system?",
    },
    {
        "question": "6.	Are you clear on your immediate and long term plans?",
    },
    {
        "question": "6.	Once you are out, will you be coming back?",
    },
]

const SurveyQuestions = () => {
    const [surveyScreen, setSurveyScreen] = useState(true);
    const [questions, setQuestions] = useState(0);
    const [happy, setHappy] = useState(0);
    const [sad, setSad] = useState(0);

    let goodFeedback = happy;
    let badFeedback = sad;

    const handleSurvey = () => {
        if (questions < surveyQuestions.length - 1) {
            setQuestions(questions + 1)
        } else {
            setSurveyScreen(false)
        }
    }

    const storage = (good, bad) => {
        if (localStorage.getItem("Good", good) !== 0) {
            let positive = 0
            positive = localStorage.getItem("Good")
            localStorage.setItem("Good", (Number(good) + Number(positive)))
        }
        if (localStorage.getItem("Bad", bad) !== 0) {
            let negative = 0
            negative = localStorage.getItem("Bad")
            localStorage.setItem("Bad", (Number(bad) + Number(negative)))
        }
    }



    return (
        <div className='container-fluid text-center hero-content'>
            <div className="row">
                <div className="col-12">
                    {surveyScreen ?
                        <div>
                            <h4>On Two Choices</h4>
                            <form>
                                <h1 className='m-2'>{surveyQuestions[questions].question}</h1>
                                <div className="response-icons" onClick={handleSurvey}>
                                    <BiHappy className='size-ic text-success' onClick={() => setHappy(happy + 1)} />
                                    <BiSad className='size-ic text-danger' onClick={() => setSad(sad + 1)} />
                                </div>
                            </form>
                        </div>
                        :
                        <div>
                            <h1>Thanks for your Feedback</h1>
                            <a className='btn btn-outline-light' onClick={() => storage(goodFeedback, badFeedback)} href="/">Back Home</a>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default SurveyQuestions