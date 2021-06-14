import React, { Component } from 'react';
import './Footer.css';
import '../App.css';
import { Button } from './button';
import { Link } from 'react-router-dom';
import { sendQuery } from './Pages/product';

class Footer extends Component {
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

  handleClick = () => {
      const {name, email, message} = this.state;

      const query = {
          name: name,
          email: email,
          message: message
      }
      
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
    const {message, email, name} = this.state
    return (
          <>
            <div className="footer-container">
              <div className="footerWrapper">
              <hr></hr>
              <div className="socialMedia">
                <h2>Connect with us</h2>
                <div className="social-media">
              <Link class='social-icon-link facebook'
                      to='/'
                      target='_blank'
                      aria-label='Facebook'
                >
                 <a href="https://m.facebook.com/Abubaba-Organic-109151944728233/?ref=page_internal" style={{color:"black"}}><i class='fab fa-facebook-f' /></a>
                </Link>
                          <Link
                          class='social-icon-link instagram'
                          to='/'
                          target='_blank'
                          aria-label='Instagram'
                          >
                          <a href="https://instagram.com/abubabaorganic?utm_medium=copy_link" style={{color:"black"}}><i class='fab fa-instagram' /></a>
                          </Link>
                          <Link
                          class='social-icon-link youtube'
                          to='/'
                          target='_blank'
                          aria-label='Youtube'
                          >
                          <i class='fab fa-youtube' />
                          </Link>
                          <Link
                          class='social-icon-link twitter'
                          to='/'
                          target='_blank'
                          aria-label='Twitter'
                          >
                          <a href="https://twitter.com/SbmEnterprise" style={{color:"black"}}><i class='fab fa-twitter' /></a>
                          </Link>
                          {/* <Link
                          class='social-icon-link twitter'
                          to='/'
                          target='_blank'
                          aria-label='LinkedIn'
                          >
                          <i class='fab fa-linkedin' />
                          </Link> */}
                          </div>
                  </div>
                  <div className="footerInfo">
                    <h2>Information</h2>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/contactus">About Us</Link></p>
                    <p><Link to="/services">Shop</Link></p>
                    <p><Link to="/Blogs">Blogs</Link></p>
                    <p><Link to="/">FAQs</Link></p>
                    <p><Link to="/">Shipping Information</Link></p>
                    <p><Link to="/">Return Policy</Link></p>
                    <p><Link to="/terms&conditions">Terms and Conditions</Link></p>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                  </div>
                  <div className="contactInfo">
                      <h2>Contact us</h2>
                      <form className="reachus">
                        <p><input className="footer-input" type="name" placeholder="Full Name*" name="name" value={name} onChange={this.handleChange}></input></p>
                        <p><input className="footer-input" type="email" placeholder="Email Address*" name="email" value={email} onChange={this.handleChange}></input></p>
                        <p><input className="footer-input" type="text" placeholder="Message*" name="message" value={message} onChange={this.handleChange}></input></p>
                        <Link to="/"><button className="btnsubmit" onClick={this.handleClick}>Submit</button></Link>
                        </form>
                  </div>

                  <div className="footerInfo2 hidden-info">
                    <h2>Information</h2>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/contactus">About Us</Link></p>
                    <p><Link to="/services">Shop</Link></p>
                    <p><Link to="/Blogs">Blogs</Link></p>
                    <p><Link to="/">FAQs</Link></p>
                    <p><Link to="/">Shipping Information</Link></p>
                    <p><Link to="/">Return Policy</Link></p>
                    <p><Link to="/terms&conditions">Terms and Conditions</Link></p>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                  </div>
              </div>
            </div>
          </>

    );
  }
}
export default Footer;
