import React from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link} from 'react-router-dom';

export default function ContactUs(){
    return (
       <>
         <div>
             <div className="about-container">
                <h1>Contact Us</h1>
             </div>
             <div className="contactus-shrink">
             <div className="signup-container">
                 <div className="contactForm">
                 <h1 className="hello-contact">Hello !</h1>
                 <p className="queries">For any Queries or leave us a Feedback</p>
                 <form className="mainForm" style={{width:"80%", marginTop:"5%"}}>
                    <p className="p1"><input className="input-form" type="text" placeholder="Full Name" ></input></p>
                    <p className="p1"><input className="input-form" type="email" placeholder="Username / Email-Address" ></input></p>
                    <p className="p1"><textarea className="message-text" name="comment" placeholder=" Message"></textarea></p>
                    <p className="p2"><input type="checkbox"></input><label>I agree that my submitted data is being collected and stored.</label></p>
                    <Button className="btn-change" buttonStyle="btn--rounded">SUBMIT</Button>
                 </form></div>
                 <div className="contactDetails">
                   <h1><i class="fas fa-map-marker-alt"></i>  Address</h1>
                   <p>A-1/128, Rohini Sector 11, New Delhi, India</p>
                   <h1><i class="fas fa-phone-alt"></i>  Phone Number</h1>
                   <p>+91 8595136293</p>
                   <h1><i class="far fa-envelope"></i>  Email Us</h1>
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
             <div className="map-container">
             <div className="map"><a href="https://abubabaorganic.com/contact/"><div className="about-container2" style={{height:"100%",width:"90%"}}></div></a>
             </div></div>
             </div>
         </div>
       </>
    );
}