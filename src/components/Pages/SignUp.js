import React from 'react'
import '../../App.css'
import {Button} from '../button'
import { Link } from 'react-router-dom';

export default function SignUp(){
    return(
        <>
         <div>
             <div className="signup-container">
                 <h1>My Account</h1>
                 <div className="signup"><div className="sRight"><Link to="/signup" style={{textDecoration:"none", color:"white"}}>SIGN UP</Link></div></div>
                 <div className="signin"><div className="sLeft"><Link to="/signin" style={{textDecoration:"none", color:"black"}}>SIGN IN</Link></div></div>
                 <form className="mainForm">
                    <p className="p1"><input className="input-form" type="text" placeholder="Full Name"></input></p>
                    <p className="p1"><input className="input-form" type="email" placeholder="Username / Email-Address"></input></p>
                    <p className="p1"><input className="input-form" type="password" placeholder="Set Password"></input></p>
                    <p className="p1"><input className="input-form" type="password" placeholder="Confirm Password"></input></p>
                    <p className="p2"><input type="checkbox"></input><label>I agree all statements <u><a href="https://abubabaorganic.com/privacy-policy/">Terms & Condition</a></u></label></p>
                    <p className="p2"><input type="checkbox"></input><label>Subscribe to newsletter for latest Updates</label></p>
                    <Link to="/"><button className="signupBtn">SIGN UP</button></Link>
                    <p>Already have an account? <Link to="/signin">Login</Link></p>
                 </form>
             </div>
         </div>
        </>
    );
}