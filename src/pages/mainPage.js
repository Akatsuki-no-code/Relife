import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import "./main-page.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useSpring, animated, config } from "react-spring";
import ExconvictInfo from "./exconvicts/exconvict";

const MainPage = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <nav className="nav-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            top: -160,
            right: 0,
            transform: "rotateZ(180deg)",
            zIndex: "5",
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
        <Link to={"/main-page/aboutus"}><div className="nav-item">About us</div></Link>
        <Link to= {"/main-page/exconvicts"}><div className="nav-item">Join us</div></Link>
        <div className="nav-item">Contact us</div>
        <div className="nav-item" onClick={()=> signOut(auth)}>Sign Out</div>
      </nav>
      <div style={{ position: "relative",top:"150px",zIndex:"0"}}>
        <Outlet/>
      </div>
    </div>
  );
};

export default MainPage;
