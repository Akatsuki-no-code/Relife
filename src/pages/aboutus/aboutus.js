import React from 'react';
import "./styles/aboutus.css"
import rahul from './img/rahul.svg'
import dhruv from './img/dhruv.svg'
import suraj from './img/suraj.svg'
import lasya from './img/lasya.svg'
import ajai from './img/ajai.svg'

const AboutUs = () => {
    return (
        <div>
            <div className='about-desc'>
                <p> "If I have seen further, it is by standing on the shoulders of giants." <br />-Isaac Newton</p>
            </div>
            <>
                <h2 style={{ textAlign: "center" }}>Meet Our Team</h2>
                <div className="row">
                    <div className="column-1">
                        <div className="card">
                            <img src={rahul} alt="Mike" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Rahul Diwakar</h2>
                                <div className='details' >
                                    <p className="title">Team Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={dhruv} alt="Mike" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Dhruv Millu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src={suraj} alt="John" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Suraj S</h2>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src={lasya} alt="John" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Sai Lasya</h2>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src={ajai} alt="John" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Ajai Raj</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <div>
                <h1>
                    Our Mission
                </h1>
            </div>
            <div>
                <h1>
                    Our Vision
                </h1>
            </div>
        </div>
    )
}

export default AboutUs;