import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        {/* <img src="/images/banner.jpeg" alt=""/> */}
      <div className='hero-btns'>
        <h1>Super Healthy and Delicious Organic Products.</h1>
        <p>Abubaba Organic offers the best organic products in delhi. We have a huge range of organic products which are 100% certified.</p>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;