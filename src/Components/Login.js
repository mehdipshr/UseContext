import React,  { useState , useContext } from 'react';
import "./Login.css";
import {LoginContext} from "../Contexts/LoginContext";

function Login() {
    const { setUsername, setShowProfile} = useContext(LoginContext);
    

    return (
        <>
            <div className="full-screen-container">
                <div className="login-container">
                    <h1 className="login-title">Welcome</h1>
                    <form action="" className="form">
                        <div className="input-group success">
                            <label for="email">User Name</label>
                            <input type="text" name="username" id="email" onChange={(event) => {setUsername(event.target.value);}}  required />
                            <span className="msg">Valid Email</span>
                        </div>
                        <div className="input-group error">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" required />
                            <span className="msg">Incorrect Password</span>
                        </div>
                        <button type="submit" className="login-btn" onClick={() => {setShowProfile(true)}} >Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login