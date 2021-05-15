import React from 'react'
import '../../App.css'
import {Button} from "../button"
import Cards from "../Cards"
import ShopComp from "../shopComp"

export default function Services(){
    return (
       <>
       <div className="service-container">
        <div className="shopNow">
            <h1>Shop Now</h1>
            <div className="jugaad">
            </div>
        </div>
        <div className="jugaadComplete">
            <h1>Trending</h1>
            <br/><br/>
            <p>We are trusted and certified organic luxury food brand
All our products are of high quality with unique uses of being grown, cultivated and packed in an organic way.</p>
            <h1><u>Traditional Ancient Methods</u></h1>
            <div className="Row1">
               <div className="r1c1"></div>
               <div className="r1c2"></div>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"25px"}}>★★★★</span><span style={{color:"white",fontSize:"25px"}}>★</span>
                   <h2>Gir Ghee</h2>
                   <h2>₹ 00.00</h2>
                   <Button buttonStyle="btn--outline">Add to Cart +</Button>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"25px"}}>★★★★★</span>
                   <h2>Premium Mustard Oil</h2>
                   <h2>₹ 00.00</h2>
                   <Button buttonStyle="btn--outline">Add to Cart +</Button>
               </div>
            </div>
            <h1><u>Hand Grinded Organic Spices</u></h1>
            <div className="Row2">
               <div className="r1c1"></div>
               <div className="r1c2"></div>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"25px"}}>★★★★</span><span style={{color:"white",fontSize:"25px"}}>★</span>
                   <h2>Lakadong Turmeric</h2>
                   <h2>₹ 00.00</h2>
                   <Button buttonStyle="btn--outline">Add to Cart +</Button>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"25px"}}>★★★★★</span>
                   <h2>Kashmirir Red chilli Powder</h2>
                   <h2>₹ 00.00</h2>
                   <Button buttonStyle="btn--outline">Add to Cart +</Button>
               </div>
            </div>

            <h1><u>Luxury Products</u></h1>
            <div className="Row3">
               <div className="r1c1"></div>
               <div className="r1c2"></div>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"25px"}}>★★★★</span><span style={{color:"white",fontSize:"25px"}}>★</span>
                   <h2>Kashmiri Saffron</h2>
                   <h2>₹ 00.00</h2>
                   <Button buttonStyle="btn--outline">Add to Cart +</Button>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"25px"}}>★★★★★</span>
                   <h2>Kashmiri Saffron</h2>
                   <h2>₹ 00.00</h2>
                   <Button buttonStyle="btn--outline">Add to Cart +</Button>
               </div>
            </div>
        </div>

       <Cards/>

       <ShopComp/>  
       </div>
       </>
    );
}