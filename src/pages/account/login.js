import React, { useState, useEffect } from 'react';
import "./styles/login.css"
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email,setEmail] = useState(null)
    const [pass,setPass] = useState(null)

    const signIn = async() => {
        const cred = await signInWithEmailAndPassword(auth,email,pass)
        console.log(cred)
    }

    return(
        <div className={"login-container"}>
            <div className={"login-box"}>
                <input type="email" placeholder="email" className="register-input" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="register-input" onChange={(e)=> setPass(e.target.value)} />
                <button onClick={()=>signIn()} className="register-button">login</button>
            </div>
        </div>
        )

}

export default Login