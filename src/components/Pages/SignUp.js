import React from 'react'
import '../../App.css'
import {Button} from '../button'

export default function SignUp(){
    return(
        <>
         <div>
             <div className="signup-container">
                 <h1>My Account</h1>
                 <div className="signup"><div className="sRight"><a href="/signup" style={{textDecoration:"none", color:"white"}}>SIGN UP</a></div></div>
                 <div className="signin"><div className="sLeft"><a href="/signin" style={{textDecoration:"none", color:"black"}}>SIGN IN</a></div></div>
                 <form className="mainForm">
                    <p className="p1"><input className="input-form" type="text" placeholder="Full Name"></input></p>
                    <p className="p1"><input className="input-form" type="email" placeholder="Username / Email-Address"></input></p>
                    <p className="p1"><input className="input-form" type="password" placeholder="Set Password"></input></p>
                    <p className="p1"><input className="input-form" type="password" placeholder="Confirm Password"></input></p>
                    <p className="p2"><input type="checkbox"></input><label>I agree all statements <u><a href="https://abubabaorganic.com/privacy-policy/">Terms & Condition</a></u></label></p>
                    <p className="p2"><input type="checkbox"></input><label>Subscribe to newsletter for latest Updates</label></p>
                    <div style={{background:"black", margin:"0 auto", width:"6.3%"}}><Button buttonStyle="btn--outline">SIGN UP</Button></div>
                    <p>Already have an account? <a href="/signin">Login</a></p>
                 </form>
             </div>
         </div>
        </>
    );
}