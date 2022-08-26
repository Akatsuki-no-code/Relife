import React, { useState, useEffect } from "react";
import "./styles/lrPage.css";
import "../../static/images/wave.svg"
import Login from "./login";
import Register from "./register";

const LRPage = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div
      className="lr-container"
      style={{
        backgroundImage: "linear-gradient(to right, #616161, #171717)",
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
            bottom: isLogin?"35px":"155px",
            left: "50%",
            transition:"0.5s"
          }}
        >
          <p style={{marginBottom:"100px",marginTop:"0px"}}>Login</p>
          <p style={{marginTop:"0px"}}>Register</p>
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
      <div
        className="lr-curtain-after"
        style={{
          left: isLogin ? "50%" : "0%",
          backgroundPositionX: isLogin ? "100%" : "0%",
          backgroundColor: isLogin
            ? "rgba(250, 79, 0, 0.308)"
            : "rgba(0, 0, 0, 0.308)",
        }}
      ></div>
    </div>
  );
};

export default LRPage;
