import React, { useState, useRef, useEffect } from 'react';
import { typing } from './typingDB';
import './components.css'

const getCloud = () => typing.toString().split(' ')

function Word(props) {
    const { text, active, correct } = props;
    if (correct === true) {
        return <span className='correct' > {text} </span>
    }
    if (correct === false) {
        return <span className='incorrect' > {text} </span>
    }
    if (active) {
        return <span className='active' > {text} </span>
    }
    return <span> {text} </span>
};

Word = React.memo(Word)

function Timer(props) {
    const { correctWords, startCounting } = props;
    const [timeElapsed, setTimeElapsed] = useState(0);
    const cloud = useRef(getCloud());
    const minutes = timeElapsed / 60

    let totalWords = cloud.current.length
    
    useEffect(() => {
        let id;
        if (startCounting) {
            id = setInterval(() => {
                setTimeElapsed(oldTime => oldTime + 1)
            }, 1000)
        }
        return () => {
            clearInterval(id)
        }
    }, [startCounting])

    return (
        <div className=''>
            <p>Time: {timeElapsed} </p>
            <p>Speed: {((correctWords / minutes) || 0).toFixed(1)} WPM</p>
            <p>Accuracy: {(((correctWords * 100) / (totalWords)) || 0).toFixed(1)} %</p>
        </div>
    )
}

const SpeedTyping = () => {
    const [userInput, setUserInput] = useState('');
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const [correctWordArray, setCorrectWordArray] = useState([]);
    const [startCounting, setStartCounting] = useState(false);
    const cloud = useRef(getCloud());

    function processInput(value) {
        if (activeWordIndex === cloud.current.length) {
            return
        }
        if (!startCounting) {
            setStartCounting(true)
        }
        if (value.at(-1) === " ") {
            if (activeWordIndex === cloud.current.length - 1) {
                setStartCounting(false)
                setUserInput('Completed')
            } else {
                setUserInput('')
            }

            //the user has finished this word            
            setActiveWordIndex(index => index + 1)

            //correct word
            setCorrectWordArray(data => {
                const word = value.trim()
                const newResult = [...data]
                newResult[activeWordIndex] = word === cloud.current[activeWordIndex]
                return newResult
            })
        } else {
            setUserInput(value)
        }
    };

    return (
        <div className='container-fluid typing-Test'>
            <div className="row">
                <div className="col-12 hero-text dashTest">
                    <p className='display-5 hero-p'>Typing Test</p>
                    <Timer startCounting={startCounting} correctWords={correctWordArray.filter(Boolean).length} />
                    <p className='story-text rounded'>{cloud.current.map((word, index) => {
                        return <Word text={word} active={index === activeWordIndex} key={index} correct={correctWordArray[index]} />
                    })}</p>
                    <input className='story-input rounded' type="text" placeholder='Start Typing....' value={userInput} onChange={(e) => processInput(e.target.value)} autoFocus />
                    <div className="btn-section">
                        <a href='./typing' className='btn btn-outline-light mt-5'>Restart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeedTyping