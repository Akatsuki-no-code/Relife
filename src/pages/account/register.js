import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";

import "./styles/register.css";

const Register = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [name, setName] = useState(null);
  const signUp = async () => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(cred);
  };

  return (
    <div className={"register-container"}>
      <div className={"register-box"}>
        <input
          type="name"
          placeholder="name"
          value={name}
          className="register-input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          className="register-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          className="register-input"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={() => signUp()} className={"register-button"}>
          Register
        </button>
        
      </div>
      
    </div>
  );
};

export default Register;
