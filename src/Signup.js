import React from 'react'
import BacktoHome from './BacktoHome'
import logo from "./images/logo.png"
function Signup() {
    return (
        <div style={{height:"120vh"}} className="container">
            <img className="logo" src={logo} alt="logo" />
            <div className="sign-in">
                <h1>SIGN IN</h1>
                <input autoComplete="email"  tabIndex="0" className="input-sign-in" type="text" placeholder="Email or phone number"/>
                <input className="input-sign-in" type="password" placeholder="Password"/>
                <button className="btn-sign-in">Sign In</button>
                <div className="check">
                    <input type="checkbox" id="remember"/>
                    <label style={{marginLeft:"10px"}} htmlFor="remember">Remember Me</label>
                </div>
            <BacktoHome />
            </div>
        </div>
    )
}

export default Signup;
