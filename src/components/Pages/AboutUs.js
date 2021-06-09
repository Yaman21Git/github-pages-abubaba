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
            message: "",
            show: ""
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
        const x = document.getElementById('check');
        if(!x.checked)
            alert.apply("Please agree to the terms")
        sendQuery(query)
        .then(result => {
            alert(result);
            this.setState({
                name: "",
                email: "",
                message: ""
            })
        })
    }

    render() {
        const {message, email, name, show} = this.state

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
                                <p className="p1"><input className="input-form" type="text" name="name" placeholder="Full Name" value={name} onChange={this.handleChange}></input></p>
                                <p className="p1"><input className="input-form" type="email" name="email" placeholder="Username / Email-Address" value={email} onChange={this.handleChange}></input></p>
                                <p className="p1"><textarea className="message-text" name="comment" placeholder=" Message" name="message" value={message} onChange={this.handleChange}></textarea></p>
                                <p className="p2"><input type="checkbox" id="check"></input><label> &nbsp; I agree that my submitted data is being collected and stored.</label></p>
                                <Button className="btn-change" buttonStyle="btn--rounded" onClick={this.handleClick}>SUBMIT</Button>
                            </form>
                        </div>
                        <div className="contactDetails">
                            <h1><i class="fas fa-map-marker-alt"></i>Address</h1>
                            <p>Rohini Sec-11, New Delhi, India</p>
                            <h1><i class="fas fa-phone-alt"></i>Phone Number</h1>
                            <p>+91 85951 36293</p>
                            <h1><i class="far fa-envelope"></i>Email Us</h1>
                            <p>mann.director@abubabaorganic.com</p>
                        </div>
                    </div>
                    <div className="map">
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
            </div>
        </>
        );
    }
}

export default ContactUs
