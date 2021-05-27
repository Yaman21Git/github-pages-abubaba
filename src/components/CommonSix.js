import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

export default function CommonSix(){
    return (
     <>
        <div className="shopNow">
          {/* <div classname="shadow"> */}
            <h1 className="h1shopnow">Shop Now</h1>
            <div className="jugaad">
            </div>
          {/* </div> */}
        </div>
        <div className="jugaadComplete">
            <h1>Trending</h1>
            <br/><br/>
            <p>We are trusted and certified organic luxury food brand
All our products are of high quality with unique uses of being grown, cultivated and packed in an organic way.</p>
            <h1 class="luxury-items"><u>Traditional Ancient Methods</u></h1>
            <div className="Row1">
               <Link to="products/60acbbae444bd63a3835cf48"><div className="r1c1"></div></Link>
               <Link to="products/60acbd4e444bd63a3835cf4b"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span><span style={{color:"white",fontSize:"1.5vw"}}>★</span>
                   <h2 className="classh2"><Link to="products/60acbbae444bd63a3835cf48" style={{textDecoration:"none",color:"white"}}>Gir Ghee</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   <div className="addtocart-btn"><Link to="/cart" className="cartlink">Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>
                   <h2 className="classh2"><Link to="products/60acbd4e444bd63a3835cf4b" style={{textDecoration:"none",color:"white"}}>Premium Mustard Oil</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link to="/cart" className="cartlink">Add to Cart +</Link></div>
               </div>
            </div>
            <h1 class="luxury-items"><u>Hand Grinded Organic Spices</u></h1>
            <div className="Row2">
               <Link to="products/60aaafc02e79914b043dc0ca"><div className="r1c1"></div></Link>
               <Link to="products/60aab0902e79914b043dc0cb"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span><span style={{color:"white",fontSize:"1.5vw"}}>★</span>
                   <h2 className="classh2"><Link to="products/60aaafc02e79914b043dc0ca" style={{textDecoration:"none",color:"white"}}>Lakadong Turmeric</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link to="/cart" className="cartlink">Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>
                   <h2 className="classh2"><Link to="products/60aab0902e79914b043dc0cb" style={{textDecoration:"none",color:"white"}}>Kashmirir Red chilli Powder</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link to="/cart" className="cartlink">Add to Cart +</Link></div>
               </div>
            </div>

            <h1 class="luxury-items"><u>Luxury Products</u></h1>
            <div className="Row3">
               <Link to="products/60aa9c8b2e79914b043dc0b1"><div className="r1c1"></div></Link>
               <Link to="products/60aa9c8b2e79914b043dc0b1"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span><span style={{color:"white",fontSize:"1.5vw"}}>★</span>
                   <h2 className="classh2"><Link to="products/60aa9c8b2e79914b043dc0b1" style={{textDecoration:"none",color:"white"}}>Kashmiri Saffron</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link to="/cart" className="cartlink">Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>
                   <h2 className="classh2"><Link to="products/60aa9c8b2e79914b043dc0b1" style={{textDecoration:"none",color:"white"}}>24k Gold Honey</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link to="/cart" className="cartlink">Add to Cart +</Link></div>
               </div>
            </div>
        </div>

     </>
    );
}