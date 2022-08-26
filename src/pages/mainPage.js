import React, { useState, useEffect } from "react";
import "./main-page.css";

import { useSpring, animated, config } from "react-spring";
import ExconvictInfo from "./exconvicts/exconvict";

const MainPage = () => {
  const [active, setActive] = useState(0);
  const { x } = useSpring({
    config: { duration: 3000, loop: true },
    x: active,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((active + 1) % 3);
    }, 3000);
    console.log(active);

    return () => clearTimeout(id);
  }, [active]);

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
            zIndex: "-5",
          }}
        >
          <defs>
            <linearGradient id="gr2" x1={1} x2={0} y1={0} y2={1}>
              <stop stop-color="#4a00e0" />
              <stop stop-color="#8e2de2" offset="100%" />
            </linearGradient>
          </defs>

          <path
            fill="url(#gr2)"
            fill-opacity="1"
            d="M 0 96 L 40 85.3 C 80 75 160 53 240 64 C 320 75 400 117 480 117.3 C 560 117 640 75 741 154 C 826 201 852 158 960 117.3 C 1038 82 1038 82 1200 64 C 1280 53 1360 75 1400 85.3 L 1440 96 L 1440 320 L 1400 320 C 1360 320 1280 320 1200 320 C 1120 320 1040 320 960 320 C 880 320 800 320 720 320 C 640 320 560 320 480 320 C 400 320 320 320 240 320 C 165 319 80 320 42 319 L 0 320 Z"
          ></path>
        </svg>
        <div className="nav-item">About us</div>
        <div className="nav-item">Join us</div>
        <div className="nav-item">Contact us</div>
        <div className="nav-item">Sign Out</div>
      </nav>
      <div style={{position:"relative",top:"150px",zIndex:"-100000"}}>
          <ExconvictInfo/>
      </div>
    </div>
  );
};

export default MainPage;