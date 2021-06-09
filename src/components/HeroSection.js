import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        {/* <img src="/images/banner.jpeg" alt=""/> */}
      <div className='hero-btns'>
        <h1>Super Healthy and Delicious Organic Products.</h1>
        <p style={{fontFamily:"'Montserrat', sans-serif"}}>With an assortment of 100% certified organic food, Abubaba Organic offers the best of healthy organic products that are made to perfection.</p>
        <Link to="/services"><button className="shopNowbtn" type="submit">SHOP NOW</button></Link>
      </div>
    </div>
  );
}

export default HeroSection;