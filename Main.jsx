import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import './pages.css'
import Hero from '../components/Hero'

const Main = () => {
  useEffect(() => {
    notify()
  }, []);
  
  const notify = () => { toast.dark("Do NOT disable DEV Tools!!!", { position: "bottom-center" }); };

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="main-video-container col-12">
          <video className='main-video' src="./assets/media/main-video.mp4" muted autoPlay loop></video>
          <Hero />         
        </div>
      </div>


    </div>
  )
}

export default Main