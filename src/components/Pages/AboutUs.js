import React from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'

export default function ContactUs(){
    return (
       <>
         <div>
             <div className="about-container" style={{height:"500px"}}>
                <h1 style={{color:"white", fontSize:"100px", paddingTop:"350px"}}>Contact Us</h1>
             </div>
             <div className="signup-container">
                 <div className="contactForm">
                 <h1 style={{marginRight:"68%"}}>Hello !</h1>
                 <p style={{marginLeft:"12%"}}>For any Queries or leave us a Feedback</p>
                 <form className="mainForm" style={{width:"80%", marginTop:"5%"}}>
                    <p className="p1"><input className="input-form" type="text" placeholder="Full Name" style={{width:"70%"}}></input></p>
                    <p className="p1"><input className="input-form" type="email" placeholder="Username / Email-Address" style={{width:"70%"}}></input></p>
                    <p className="p1"><textarea rows="10" cols="83" name="comment" placeholder=" Message" style={{borderRadius:"10px",border:"2px solid black"}}></textarea></p>
                    <p className="p2"><input type="checkbox" style={{marginLeft:"-12%"}}></input><label>I agree that my submitted data is being collected and stored.</label></p>
                    <div style={{background:"black", margin:"0 auto", width:"11%"}}><Button buttonStyle="btn--outline">SUBMIT</Button></div>
                 </form></div>
                 <div className="contactDetails">
                   <h1><i class="fas fa-map-marker-alt"></i>  Address</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   <h1><i class="fas fa-phone-square-alt"></i>  Phone Number</h1>
                   <p>(+880) 123 456 7898, (+880) 123 456 7898</p>
                   <h1><i class="fas fa-map-marker-alt"></i>  Email Us</h1>
                   <p>info@yoursite.com, info@abubabaorganics.com</p>
                 </div>
             </div>
             {/* <div className="about-container1" style={{height:"700px"}}> */}
             {/* <div class='footer-link-items'>
                <section className='footer-subscription'>
                    <p style={{marginLeft:"150px", color:"black"}} className='footer-subscription-text'>
                    <u>Contact Us</u>
                    </p>
                    <div className='input-areas'>
                    <form>
                        <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
                        <input className='footer-input' name='name' type='text' placeholder='Your Name'/>
                        <input className='footer-input' name='Message' type='text' placeholder='Message'/>
                        <Button style={{color:"blue"}} buttonStyle='btn--primary'>Submit</Button>
                    </form>
                    </div>
                 </section>
                </div> */}
             {/* </div> */}
             <div className="map"><a href="https://abubabaorganic.com/contact/"><div className="about-container2" style={{height:"600px"}}></div></a>
             </div>
         </div>
       </>
    );
}