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
            <div>
                <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=> setPass(e.target.value)} />
                <button onClick={()=>signIn()}>login</button>
            </div>
        </div>
        )

}

export default Login