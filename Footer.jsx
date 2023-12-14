import React, { useState } from 'react';
import './components.css';


const Footer = () => {
  const [hideBtn, setHideBtn] = useState('Software Development Team 2024')

  const toggler = () => {
    setHideBtn('click Me!')    
  }

  return (
    <div>
      <div className='footer-main'>
        <small onMouseOver={toggler}><a href='/contact'> {hideBtn} &copy; </a></small>
      </div>
    </div>
    
  )
}

export default Footer