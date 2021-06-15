import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CommonSix(){

    const addToCart = (productId, name) => e => {
        e.preventDefault();
        if (!(localStorage.getItem("cart"))){
            const details = {
                id: productId,
                name: name,
                quantity: 1
            }
            localStorage.setItem("cart", JSON.stringify([details]));
        }
        else{
            var flag = false;
            var array = JSON.parse(localStorage.getItem("cart"));
            
            for(var i=0; i<array.length; i++){
                if(productId === array[i].id){
                    flag = true;
                    array[i].quantity += 1;
                }
            }
            if(!flag){
                const details = {
                    id: productId,
                    name: name,
                    quantity: 1
                }
                array.push(details);
            }
            localStorage.setItem("cart", JSON.stringify(array));
        }
        toast.success(<div style={{ position: 'relative' }}>
            <h6>Item added to cart</h6>
            </div>, {
            position: "top-center",
            autoClose: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
    }

    return (
     <>
        <div className="shopNow">
          {/* <div classname="shadow"> */}
            <h1 className="h1shopnow">Shop Now</h1>
            <div className="jugaad">
            </div>
          {/* </div> */}
        </div>
        <div className="background-shopnow">
        <div className="jugaadComplete">
            <h1 style={{marginBottom:"0%"}}>Trending</h1>
            <br/><br/>
            <p>We are trusted and certified organic luxury food brand
All our products are of high quality with unique uses of being grown, cultivated and packed in an organic way.</p>
            <h1 class="luxury-items"><u>Traditional Ancient Methods</u></h1>
            <div className="Row1">
               <Link to="products/60acbbae444bd63a3835cf48"><div className="r1c1"></div></Link>
               <Link to="products/60acbd4e444bd63a3835cf4b"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   {window.innerWidth>680&&<span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span>}{window.innerWidth>680&&<span style={{color:"white",fontSize:"1.5vw"}}>★</span>}
                   {window.innerWidth<=680&&<span style={{color:"yellow", fontSize:"2.5vw",position:"absolute",marginLeft:"-6%"}}>★★★★</span>}{window.innerWidth<=680&&<span style={{color:"white",fontSize:"2.5vw",position:"absolute",marginLeft:"2.8%"}}>★</span>}
                   <h2 className="classh2 priceh2"><Link to="products/60acbbae444bd63a3835cf48" style={{textDecoration:"none",color:"white"}}>Gir Ghee</Link></h2>
                   <h2 className="classh2">₹ 1599.00</h2>
                   <div className="addtocart-btn"><Link onClick={addToCart("60acbbae444bd63a3835cf48", "Gir Ghee")} className="cartlink">Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   {window.innerWidth>680&&<span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>}
                   {window.innerWidth<=680&&<span style={{color:"yellow", fontSize:"2.5vw",position:"absolute",marginLeft:"-6%"}}>★★★★★</span>}
                   <h2 className="classh2 priceh2"><Link to="products/60acbd4e444bd63a3835cf4b" style={{textDecoration:"none",color:"white"}}>Premium Mustard Oil</Link></h2>
                   <h2 className="classh2">₹ 510.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link onClick={addToCart("60acbd4e444bd63a3835cf4b", "Mustard Oil")} className="cartlink">Add to Cart +</Link></div>
               </div>
            </div>
            <h1 class="luxury-items"><u>Hand Churned Organic Spices</u></h1>
            <div className="Row2">
               <Link to="products/60aaafc02e79914b043dc0ca"><div className="r1c1"></div></Link>
               <Link to="products/60aab0902e79914b043dc0cb"><div className="r1c2"></div></Link>
               <div className="r2c1">
               {window.innerWidth>680&&<span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span>}{window.innerWidth>680&&<span style={{color:"white",fontSize:"1.5vw"}}>★</span>}
                   {window.innerWidth<=680&&<span style={{color:"yellow", fontSize:"2.5vw",position:"absolute",marginLeft:"-6%"}}>★★★★</span>}{window.innerWidth<=680&&<span style={{color:"white",fontSize:"2.5vw",position:"absolute",marginLeft:"2.8%"}}>★</span>}
                   <h2 className="classh2 priceh2"><Link to="products/60aaafc02e79914b043dc0ca" style={{textDecoration:"none",color:"white"}}>Lakadong Turmeric</Link></h2>
                   <h2 className="classh2">₹ 99.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link onClick={addToCart("60aaafc02e79914b043dc0ca", "Lakadong Turmeric")} className="cartlink">Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
               {window.innerWidth>680&&<span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>}
                   {window.innerWidth<=680&&<span style={{color:"yellow", fontSize:"2.5vw",position:"absolute",marginLeft:"-6%"}}>★★★★★</span>}
                   <h2 className="classh2 priceh2"><Link to="products/60aab0902e79914b043dc0cb" style={{textDecoration:"none",color:"white"}}>Kashmirir Red chilli Powder</Link></h2>
                   <h2 className="classh2">₹ 99.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link onClick={addToCart("60aab0902e79914b043dc0cb", "Kashmirir Red chilli Powder")} className="cartlink">Add to Cart +</Link></div>
               </div>
            </div>

            <h1 class="luxury-items"><u>Luxury Products</u></h1>
            <div className="Row3">
               <Link to="products/60aa9c8b2e79914b043dc0b1"><div className="r1c1"></div></Link>
               <Link to="products/60aea48122472a5940a04a28"><div className="r1c2"></div></Link>
               <div className="r2c1">
               {window.innerWidth>680&&<span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span>}{window.innerWidth>680&&<span style={{color:"white",fontSize:"1.5vw"}}>★</span>}
                   {window.innerWidth<=680&&<span style={{color:"yellow", fontSize:"2.5vw",position:"absolute",marginLeft:"-6%"}}>★★★★</span>}{window.innerWidth<=680&&<span style={{color:"white",fontSize:"2.5vw",position:"absolute",marginLeft:"2.8%"}}>★</span>}
                   <h2 className="classh2 priceh2"><Link to="products/60aa9c8b2e79914b043dc0b1" style={{textDecoration:"none",color:"white"}}>Kashmiri Saffron</Link></h2>
                   <h2 className="classh2">₹ 510.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link onClick={addToCart("60aa9c8b2e79914b043dc0b1", "Kashmiri Saffron")} className="cartlink">Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
               {window.innerWidth>680&&<span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>}
                   {window.innerWidth<=680&&<span style={{color:"yellow", fontSize:"2.5vw",position:"absolute",marginLeft:"-6%"}}>★★★★★</span>}
                   <h2 className="classh2 priceh2"><Link to="products/60aea48122472a5940a04a28" style={{textDecoration:"none",color:"white"}}>24k Gold Honey</Link></h2>
                   <h2 className="classh2">₹ 1595.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div className="addtocart-btn"><Link onClick={addToCart("60aea48122472a5940a04a28", "24k Gold Honey")} className="cartlink">Add to Cart +</Link></div>
               </div>
            </div>
        </div>
       </div>
     </>
    );
}