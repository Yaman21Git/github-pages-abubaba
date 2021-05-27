import React from 'react';
import '../App.css';
import { Button } from './button';
import { Link } from 'react-router-dom';
//import './AbubabaOrg.css';

function AbubabaOrg() {
    return (
      <div className="abubaba_org-container">
            <div className="oldage">
              <div className="borderBlack">
                <div className="imgAbu">
                </div>
                <div className="dividing">
                </div>
                <div className="matter">
                  <div style={{marginTop:"-5%"}}><h1>ABUBABA</h1>
                  <h1>ORGANIC</h1></div>
                  <p>Abubaba organic sells curated hand-made products prepared by local artisans.</p>
                   <p className="sec">Our impeccable quality products are prepared to meet absolute standards in organic production and will not let you down.</p>
                   <Link to="/services"><button className="shopNowbtn1" type="submit">SHOP NOW</button></Link>
                </div>
              </div>
            </div>
      </div>
    );
  }
  
  export default AbubabaOrg;