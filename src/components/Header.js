import React from 'react';
import '../App.css';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <img src="/images/contactus_background.jpg" alt=""/>
        <h1>Contact Us</h1>
    </div>
  );
}

export default Header;