import React, { useState, useEffect } from 'react';
import "./styles/aboutus.css"

const AboutUs = () => {
    return (
        <div>
            <div className="container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    style={{
                        position: "absolute",
                        // top: -160,
                        right: 0,
                        transform: "rotateZ(180deg)",
                        zIndex: "-5",
                    }}
                >
                    <defs>
                        <linearGradient id="gr2" x1={1} x2={0} y1={0} y2={1}>
                            <stop stopColor="#4a00e0" />
                            <stop stopColor="#8e2de2" offset="100%" />
                        </linearGradient>
                    </defs>

                    <path
                        fill="url(#gr2)"
                        fillOpacity="1"
                        d="M 0 96 L 40 85.3 C 80 75 160 53 240 64 C 320 75 400 117 480 117.3 C 560 117 640 75 741 154 C 826 201 852 158 960 117.3 C 1038 82 1038 82 1200 64 C 1280 53 1360 75 1400 85.3 L 1440 96 L 1440 320 L 1400 320 C 1360 320 1280 320 1200 320 C 1120 320 1040 320 960 320 C 880 320 800 320 720 320 C 640 320 560 320 480 320 C 400 320 320 320 240 320 C 165 319 80 320 42 319 L 0 320 Z"
                    ></path>
                </svg>
            </div>
            <div className='about-section'>
                <h1>About Us Page</h1>
            </div>
            <div className='about-desc'>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <>
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src="/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
                            <div className="container">
                                <h2>Person 1</h2>
                                <p className="title">CEO &amp; Founder</p>
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
                                <h2>Person 2</h2>
                                <p className="title">Art Director</p>
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
                                <h2>Person 3</h2>
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