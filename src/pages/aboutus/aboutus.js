import React from 'react';
import "./styles/aboutus.css"
import img from './img/rahul.svg'

const AboutUs = () => {
    return (
        <div>
            <div className='about-desc'>
                <p> "If I have seen further, it is by standing on the shoulders of giants." <br />-Isaac Newton</p>
            </div>
            <>
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                        <img src= {img}alt="Mike" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Rahul Diwakar</h2>
                                <p className="title">Team Leader</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Dhruv Millu</h2>
                                <p className="title">Programmer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src="/w3images/team3.jpg" alt="John" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Suraj S</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src="/w3images/team3.jpg" alt="John" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Sai Lasya</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src="/w3images/team3.jpg" alt="John" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Ajai Raj</h2>
                                <p className="title">Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default AboutUs;