import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify';
import MicrosoftTesting from './MicrosoftTesting';
import './components.css'

const microsoftVideos = [
    {
        "videoSrc": "./assets/media/word/Microsoft1.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft2.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft3.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft4.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft5.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft6.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft7.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft8.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft9.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft10.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft11.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft12.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft13.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft14.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft15.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft16.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft17.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft18.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft19.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft20.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft21.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft22.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft23.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft24.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft25.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft26.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft27.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft28.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft29.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft30.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft31.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft32.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft33.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft34.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft35.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft36.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft37.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft38.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft39.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft40.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft41.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft42.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft43.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft44.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft45.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft46.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft47.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft48.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft49.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft50.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft51.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft52.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft53.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft54.mp4",
    },
    {
        "videoSrc": "./assets/media/word/Microsoft55.mp4",
    },

];


const MicrosoftClasses = () => {
    const videoRef = useRef()

    const [lessonScreen, setLessonScreen] = useState(true);
    const [video, setVideo] = useState(0);

    const handleNextLesson = () => {
        if (video < microsoftVideos.length - 1) {
            setVideo(video + 1)
        } else {
            setLessonScreen(false)
        }
    }
    const handlePreviousLesson = () => {
        if (video < microsoftVideos.length - 1 && video > 0) {
            setVideo(video - 1)
        }
    }

    const handleTesting = () => {
        toast.dark(<MicrosoftTesting />, { position: "top-left", closeButton: true, closeOnClick: false })
    }
   

    return (
        <div className="box-body text-light">
            {lessonScreen ?
                <div className="box">
                    <h4>Microsoft Word Lesson {video + 1} </h4>
                    <video className='' src={microsoftVideos[video].videoSrc} ref={videoRef} onMouseOver={() => { videoRef.current.play() }} onMouseLeave={() => { videoRef.current.pause(); toast.dark('if the mouse pointer leave the video, the video will be paused', { position: "bottom-center" }) }}></video>
                    <button className="btn btn-outline-light" onClick={handlePreviousLesson}>Previous</button>
                    <button className="btn btn-outline-light" onClick={handleNextLesson}>Next</button>
                    <button className="btn btn-outline-light" onClick={handleTesting}>Test</button>
                </div>
                :
                <div className='box'>
                    <h1>Congrats you Completed <br /> Our Microsoft Course</h1>
                    <a className='btn btn-outline-light' href="/microsoft">Back Home</a>
                </div>
            }
        </div>
    )
}

export default MicrosoftClasses