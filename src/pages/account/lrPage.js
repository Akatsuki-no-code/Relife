import React, { useState, useEffect } from "react";
import "./styles/lrPage.css";
import "../../static/images/wave.svg"
import Login from "./login";
import Register from "./register";
import { useSpring, animated, config } from "react-spring";

const LRPage = () => {

  const [isLogin, setLogin] = useState(false);
  const [active, setActive] = useState(0);
  const { x } = useSpring({ config: { duration: 14000,loop:true }, x: active});
  
  useEffect(() => {
    const id = setTimeout(() => {
      setActive((active+1)%3);
    }, 14000);
    console.log(active)

    return () => clearTimeout(id);
  }, [active]);
  return (
    <div
      className="lr-container"
      style={{
        backgroundSize: "200%",
        backgroundPositionX: isLogin ? "0%" : "100%",
      }}
    >
      <div className="l-container">
        <Login />
      </div>
      <div onClick={() => setLogin(!isLogin)} className={"lr-switch"}>
        <div
          style={{
            position: "relative",
            transform: "translate(-50%,50%)",
            bottom: isLogin?"40px":"165px",
            left: "50%",
            transition:"0.5s"
          }}
        >
          <p style={{marginBottom:"100px",marginTop:"0px"}}>Register</p>
          <p style={{marginTop:"0px"}}>Login</p>
        </div>
      </div>
      <div className="r-container">
        <Register />
      </div>
      <div
        className="lr-curtain"
        style={{
          left: isLogin ? "50%" : "0%",
          backgroundPositionX: isLogin ? "100%" : "0%",
        }}
      ></div>
      
      <svg
        viewBox="0 0 1440 220"
        style={{position:'absolute',bottom:0,right:0,zIndex:"-10000"}}
        >
        <defs>
            <linearGradient id="gr1" x1={1} x2={0} y1={0} y2={1}>
                <stop stop-color="#ff8008"  />
                <stop stop-color="#ffc837" offset="100%"/>
            </linearGradient>
        </defs>

        <animated.path
        fill="url(#gr1)" fill-opacity="1"
          d={x.to({
            range: [0,1, 2],
            output: [
                "M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,288C672,299,768,277,864,234.7C960,192,1056,128,1152,138.7C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,80C672,107,768,149,864,192C960,235,1056,277,1152,272C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,288L48,288C96,288,192,288,288,240C384,192,480,96,576,58.7C672,21,768,43,864,74.7C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

            ],
          })}
        />
        </svg>
        <svg
        viewBox="0 0 1440 220"
        style={{position:'absolute',top:0,right:0,transform:"rotateZ(180deg)",zIndex:"-10000"}}
      >
        <defs>
            <linearGradient id="gr2" x1={1} x2={0} y1={0} y2={1}>
                <stop stop-color="#021B79"  />
                <stop stop-color="#0575E6" offset="100%"/>
            </linearGradient>
        </defs>

        <animated.path
        fill="url(#gr2)" fill-opacity="1"
          d={x.to({
            range: [0,1, 2],
            output: [
                "M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,288C672,299,768,277,864,234.7C960,192,1056,128,1152,138.7C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,80C672,107,768,149,864,192C960,235,1056,277,1152,272C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,288L48,288C96,288,192,288,288,240C384,192,480,96,576,58.7C672,21,768,43,864,74.7C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

            ],
          })}
        />
        </svg>
    </div>
  );
};

export default LRPage;
