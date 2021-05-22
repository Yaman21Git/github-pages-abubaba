import React from 'react'
import '../../App.css'
import {Button} from '../button'
import { Link } from 'react-router-dom';

export default function SignIn(){
    return(
        <>
         <div>
             <div className="signin-container" style={{height:"32vw",backgroundColor:"#F6EFE5",paddingTop:"2%"}}>
                 <h1>My Account</h1>
                 <div className="signup"><div className="sRight" style={{background:"#F6EFE5"}}><Link to="/signup" style={{textDecoration:"none", color:"black"}}>SIGN UP</Link></div></div>
                 <div className="signin"><div className="sLeft" style={{background:"black"}}><Link to="/signin" style={{textDecoration:"none", color:"white"}}>SIGN IN</Link></div></div>
                 <form className="mainForm">
                    
                    <p className="p1"><input className="input-form" type="email" placeholder="Username / Email-Address"></input></p>
                    <p className="p1"><input className="input-form" type="password" placeholder="Password"></input></p>
                    
                    <p style={{marginRight:"26%"}}><input type="checkbox"></input><label> Remember me</label></p>
                    
                    <Link to="/"><button className="signupBtn">SIGN IN</button></Link>
                    <p>Create Account <Link to="/signup">SIGN UP</Link></p>
                 </form>
             </div>
         </div>
        </>
    );
}