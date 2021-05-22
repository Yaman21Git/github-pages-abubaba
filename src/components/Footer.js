import React from 'react';
import './Footer.css';
import '../App.css';
import { Button } from './button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footerWrapper">
        <hr></hr>
         <div className="socialMedia">
           <h2 style={{fontSize:"1.5vw", marginLeft:"30%",marginTop:"9%"}}>Connect with us</h2>
           <div className="social-media">
         <Link class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
          >
          <i class='fab fa-facebook-f' />
          </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
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
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link></div>
            </div>
            <div className="footerInfo">
              <h2>Information</h2>
              <p><a href="/">Home</a></p>
              <p><a href="/contactus">About Us</a></p>
              <p><a href="/services">Shop</a></p>
              <p><a href="/Blogs">Blogs</a></p>
              <p><a href="/">FAQs</a></p>
              <p><a href="/">Shipping Information</a></p>
              <p><a href="/">Return Policy</a></p>
              <p><a href="/">Terms and Conditions</a></p>
              <p><a href="/">Privacy Policy</a></p>
            </div>
            <div className="contactInfo">
                <h2 style={{fontSize:"1.5vw",marginBottom:"5%",marginLeft:"10%"}}>Contact us</h2>
                <form className="reachus">
                   <p><input className="footer-input" type="name" placeholder="Full Name*" name="name"></input></p>
                   <p><input className="footer-input" type="email" placeholder="Email Address*" name="email"></input></p>
                   <p><input className="footer-input" type="text" placeholder="Message*" name="message"></input></p>
                   <Link to="/"><button className="btnsubmit">Submit</button></Link>
                </form>
            </div>
         </div>
      </div>
    </>
    // <div className='footer-container'>
    //   <div class='footer-links'>
    //     <div className='footer-link-wrapper'>
    //       <div class='footer-link-items'>
    //         <section class='social-media'>
    //           <div class='social-media-wrap'>
    //             <div class='social-icons'>
    //                 
    //             </div>
    //             </div>
    //         </section>
    //       </div>
    //     </div>


    //     <div className='footer-link-wrapper'>
    //       <div class='footer-link-items'>
    //         <h2><a href="/contactus">About Us</a></h2>
    //         <Link to='/sign-up'>How it works</Link>
    //         <Link to='/'>Testimonials</Link>
    //         <Link to='/'>Careers</Link>
    //         <Link to='/'>Investors</Link>
    //         <Link to='/'>Terms of Service</Link>
    //       </div>
    //       <div class='footer-link-items'>
    //         <section className='footer-subscription'>
    //             <p className='footer-subscription-text'>
    //             Contact Us
    //             </p>
    //             <div className='input-areas'>
    //             <form>
    //                 <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
    //                 <input className='footer-input' name='name' type='text' placeholder='Your Name'/>
    //                 <input className='footer-input' name='Message' type='text' placeholder='Message'/>
    //                 <Button buttonStyle='btn--outline'>Submit</Button>
    //             </form>
    //             </div>
    //         </section>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;