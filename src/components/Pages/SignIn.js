import React from 'react'
import '../../App.css'
import {Button} from '../button'

export default function SignIn(){
    return(
        <>
         <div>
             <div className="signin-container" style={{height:"500px"}}>
                 <h1>My Account</h1>
                 <div className="signup"><div className="sRight" style={{background:"white"}}><a href="/signup" style={{textDecoration:"none", color:"black"}}>SIGN UP</a></div></div>
                 <div className="signin"><div className="sLeft" style={{background:"black"}}><a href="/signin" style={{textDecoration:"none", color:"white"}}>SIGN IN</a></div></div>
                 <form className="mainForm">
                    
                    <p className="p1"><input className="input-form" type="email" placeholder="Username / Email-Address"></input></p>
                    <p className="p1"><input className="input-form" type="password" placeholder="Password"></input></p>
                    
                    <p style={{marginRight:"330px"}}><input type="checkbox"></input><label> Remember me</label></p>
                    
                    <div style={{background:"black", margin:"0 auto", width:"6.3%"}}><Button buttonStyle="btn--outline">SIGN IN</Button></div>
                    <p>Create Account <a href="/signup">SIGN UP</a></p>
                 </form>
             </div>
         </div>
        </>
    );
}