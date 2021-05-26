import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import { sendQuery } from './product';

class ContactUs extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    
    handleClick = (event) => {
        event.preventDefault();
        const {name, email, message} = this.state;

        const query = {
            name: name,
            email: email,
            message: message
        }
        console.log(query);
        sendQuery(query)
        .then()
    }

    render() {
        const {message, email, name} = this.state

        return (
        <>
            <div>
                <div className="about-container" style={{height:"30vw"}}>
                    <h1 style={{color:"white", fontSize:"8vw", paddingTop:"22%"}}>Contact Us</h1>
                </div>
                <div className="signup-container">
                    <div className="contactForm">
                    <h1 style={{marginLeft:"-65%",fontSize:"4vw"}}>Hello !</h1>
                    <p style={{marginLeft:"12%",fontSize:"1vw"}}>For any Queries or leave us a Feedback</p>
                    <form className="mainForm" style={{width:"80%", marginTop:"5%"}}>
                        <p className="p1"><input className="input-form" type="text" name="name" placeholder="Full Name" style={{width:"70%",marginBottom:"3%"}} value={name} onChange={this.handleChange}></input></p>
                        <p className="p1"><input className="input-form" type="email" name="email" placeholder="Username / Email-Address" style={{width:"70%",marginBottom:"3%"}} value={email} onChange={this.handleChange}></input></p>
                        <p className="p1"><textarea name="comment" placeholder=" Message" name="message" style={{borderRadius:"10px",border:"2px solid black",height:"6vw",width:"70%",backgroundColor:"#F6EFE5"}} value={message} onChange={this.handleChange}></textarea></p>
                        
                        <input type="checkbox" style={{ float: "left", display: "inline", marginTop: "0%", marginLeft: "15%"}} />
                        <p style={{ float: "left", display: "inline", fontSize:"0.7vw" }}> &nbsp; I agree that my submitted data is being collected and stored.</p>

                        <Button buttonStyle="btn--rounded" onClick={this.handleClick}>SUBMIT</Button>
                    </form></div>
                    <div className="contactDetails">
                    <h1><i class="fas fa-map-marker-alt"></i>  Address</h1>
                    <p>A-1/128, Rohini Sector 11, New Delhi, India</p>
                    <h1><i class="fas fa-phone-square-alt"></i>  Phone Number</h1>
                    <p>+91 8595136293</p>
                    <h1><i class="fas fa-map-marker-alt"></i>  Email Us</h1>
                    <p>info@abubabaorganics.com</p>
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
                

                <div style={{height:"34vw", width:"100%",backgroundColor:"#F6EFE5"}}>
                <iframe style = {{
                width: "100%",
                height: "90%",
                style: "border:0",
                loading: "lazy",
                allowfullscreen: "true"}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC1BnzpbEJSZUMak0IBq-oLny05n2l_t0I
                    &q=11+Rohini+Delhi">
                </iframe>
                </div>
            </div>
            
        </>
        );
    }
}

export default ContactUs
