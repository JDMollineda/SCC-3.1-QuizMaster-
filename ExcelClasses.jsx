import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify';
import ExcelTesting from './ExcelTesting';
import './components.css'

const excelVideos = [
    {
        "videoSrc": "./assets/media/excel/excel1.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel2.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel3.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel4.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel5.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel6.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel7.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel8.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel9.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel10.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel11.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel12.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel13.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel14.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel15.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel16.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel17.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel18.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel19.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel20.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel21.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel22.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel23.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel24.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel25.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel26.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel27.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel28.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel29.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel30.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel31.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel32.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel33.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel34.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel35.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel36.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel37.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel38.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel39.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel40.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel41.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel42.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel43.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel44.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel45.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel46.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel47.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel48.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel49.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel50.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel51.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel52.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel53.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel54.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel55.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel56.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel57.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel58.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel59.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel60.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel61.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel62.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel63.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel64.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel65.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel66.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel67.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel68.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel69.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel70.mp4",
    },
    {
        "videoSrc": "./assets/media/excel/excel71.mp4",
    },
];

const MicrosoftClasses = () => {
    const videoRef = useRef()

    const [lessonScreen, setLessonScreen] = useState(true);
    const [video, setVideo] = useState(0);

    const handleNextLesson = () => {
        if (video < excelVideos.length - 1) {
            setVideo(video + 1)
        } else {
            setLessonScreen(false)
        }
    }
    const handlePreviousLesson = () => {
        if (video < excelVideos.length - 1 && video > 0) {
            setVideo(video - 1)
        }
    }

    const handleTesting = () => {
        toast.dark(<ExcelTesting />, { position: "top-left", closeButton: true, closeOnClick: false })
    }
   

    return (
        <div className="box-body text-light">
            {lessonScreen ?
                <div className="box">
                    <h4>Microsoft Excel Lesson {video + 1} </h4>
                    <video className='' src={excelVideos[video].videoSrc} ref={videoRef} onMouseOver={() => { videoRef.current.play() }} onMouseLeave={() => { videoRef.current.pause(); toast.dark('if the mouse pointer leave the video, the video will be paused', { position: "bottom-center" }) }}></video>
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