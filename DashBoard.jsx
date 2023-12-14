import React, { useEffect } from 'react'
// import { toast } from 'react-toastify';
import './pages.css'
import Pages from '../components/Pages'


const DashBoard = () => {
    let info = {};

    const data = () => {
        info.Community_Kitchen = localStorage.getItem("Community Kitchen");
        info.cdl_General = localStorage.getItem("General Knowledge");
        info.cdl_Brakes = localStorage.getItem("Air Brakes");
        info.cdl_Combination = localStorage.getItem("Combination Vehicles");
        info.coding_HTML = localStorage.getItem("html");
        info.coding_CSS = localStorage.getItem("css");
        info.coding_JS = localStorage.getItem("javascript");
        info.hvac_Core = localStorage.getItem("Core");
        info.hvac_General = localStorage.getItem("HVAC General");
        info.hvac_TypeI = localStorage.getItem("Type I (small appliances)");
        info.hvac_TypeII = localStorage.getItem("Type II (High Pressure)");
        info.hvac_TypeIII = localStorage.getItem("Type III (Low Pressure)");
        info.survey_Positive = localStorage.getItem("Good");
        info.survey_Negative = localStorage.getItem("Bad");
    }
    data()

    return (
        <Pages image='./assets/images/dashBoard.jpg'
            content=
            <div className='container-fluid hero-content'>
                <div className="row">
                    <div className="col-12 hero-text dashTest">
                        <p className='display-5 hero-p'>Welcome To Our</p>
                        <h3 className='hero-h1'>SCC DashBoard</h3>
                        <a href="/contact">Click here for updates</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-6">
                            <p className='text-start text-uppercase'>{
                                Object.keys(info).map(((option, key) => {
                                    return (
                                        <small key={key}>{option}<br /> </small>
                                    );
                                }))}</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-uppercase'>{
                                Object.values(info).map(((option, key) => {
                                    return (
                                        <small key={key}>{option}<br /> </small>
                                    );
                                }))}</p>
                        </div>
                    </div>
                </div>
            </div>
        />

    )
}

export default DashBoard