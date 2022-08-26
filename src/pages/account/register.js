import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import "./styles/register.css"

const Register = () => {
    const [email,setEmail] = useState(null)
    const [pass,setPass] = useState(null)

    const signUp = async() => {
        const cred = await createUserWithEmailAndPassword(auth,email,pass)
        console.log(cred)
    }

    return(
        <div className={"register-container"}>
            <div>
                <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=> setPass(e.target.value)} />
                <button onClick={()=>signUp()}>Register</button>
            </div>
        </div>
        )

}

export default Register