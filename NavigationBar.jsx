import React from 'react'
import './components.css'
import { FaBars } from 'react-icons/fa';


const NavigationBar = () => {
  return (
    <header className='nav-personalized'>
      <input type="checkbox" name="" id="chk1" />
      <ul className="logo">
        <li><a href="/">SCC 2024 <small>v.3.1</small></a></li>
      </ul>
      <ul>
        <li><a href="/cdl">CDL</a></li>
        <li><a href="/hvac">HVAC</a></li>
        <li><a href="/kitchen">Culinary</a></li>
        <li><a href="/microsoft">Microsoft</a></li>
        <li><a href="/typing">Typing</a></li>
        <li><a href="/coding">Coding</a></li>
      </ul>
      <div className="menu">
        <label htmlFor="chk1">
          <i className=""><FaBars /></i>
        </label>
      </div>
    </header>
  )
}

export default NavigationBar