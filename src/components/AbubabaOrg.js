import React from 'react';
import '../App.css';
import { Button } from './button';
//import './AbubabaOrg.css';

function AbubabaOrg() {
    return (
      <div className="abubaba_org-container">
        <div className="abuOrg">
            <div className="oldage">
                <div className="imgAbu">
                </div>
                <div className="dividing">
                </div>
                <div className="matter">
                  <div><h1>ABUBABA</h1>
                  <h1>ORGANIC</h1></div>
                  <p>Abubaba organic sells curated hand-made products prepared by local artisans.
  Our impeccable quality products are prepared to meet absolute standards in organic production and will not let you down.</p>
                  <Button classname="shop" buttonStyle="btn--primary" >SHOP NOW</Button>
                </div>
      
            </div>
        </div>
      </div>
    );
  }
  
  export default AbubabaOrg;