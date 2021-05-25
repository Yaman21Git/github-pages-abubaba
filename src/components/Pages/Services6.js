import React from 'react'
import '../../App.css'
import {Button} from "../button"
import Cards from "../Cards"
import ShopComp from "../shopComp"
import { Link } from 'react-router-dom';
// import Trending from "../Trending"

import '../Trending.css';
import TrendingItem from '../TrendingItems';
import img0 from '../../images2/182-Lakadong-Turmeric-Amended.jpg'
import img1 from '../../images2/183 Kashmiri-Red-Chilli.jpg'
import img2 from '../../images2/186-Lemon-LIme-salt.jpg'
import img3 from '../../images2/Kitchen-King-02.jpg'
import img4 from '../../images2/Peri-Peri-.jpg'
import img5 from '../../images2/Lemon-Chutney.jpg'
import img6 from '../../images2/194-Green-Chilli-Pickle.jpg'
import img7 from '../../images2/195 Garlic-Pickle.jpg'
import img8 from '../../images2/190Mango-Chutney.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Lakadong Turmeric', 'Kashmiri Red Chilli', 'Lemon Lime Salt','Kitchen King Masala','Peri Peri Mix','Lemon Chutney','Green Chilli Pickle','Garlic Pickle','Mango Chutney'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/services','/services','/services','/services','/services','/services',,'/services','/services','/services'];

export default function Services6(){
    return (
       <>
       <div className="service-container">
        <div className="shopNow">
          {/* <div classname="shadow"> */}
            <h1 style={{fontSize:"6vw"}}>Shop Now</h1>
            <div className="jugaad">
            </div>
          {/* </div> */}
        </div>
        <div className="jugaadComplete">
            <h1>Trending</h1>
            <br/><br/>
            <p>We are trusted and certified organic luxury food brand
All our products are of high quality with unique uses of being grown, cultivated and packed in an organic way.</p>
            <h1 style={{fontSize:"3.8vw"}}><u>Traditional Ancient Methods</u></h1>
            <div className="Row1">
               <Link to="/Products/GirGhee"><div className="r1c1"></div></Link>
               <Link to="/Products/GirGhee"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span><span style={{color:"white",fontSize:"1.5vw"}}>★</span>
                   <h2 className="classh2"><Link to="/Products/GirGhee" style={{textDecoration:"none",color:"white"}}>Gir Ghee</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   <div style={{border:"1px solid white",paddingTop:"1%",paddingBottom:"1%",width:"34%",marginLeft:"33%"}}><Link to="/cart" style={{fontSize:"0.9vw",textDecoration:"none",color:"white"}}>Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>
                   <h2 className="classh2"><Link to="/Products/GirGhee" style={{textDecoration:"none",color:"white"}}>Premium Mustard Oil</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div style={{border:"1px solid white",paddingTop:"1%",paddingBottom:"1%",width:"34%",marginLeft:"33%"}}><Link to="/cart" style={{fontSize:"0.9vw",textDecoration:"none",color:"white"}}>Add to Cart +</Link></div>
               </div>
            </div>
            <h1 style={{fontSize:"3.8vw"}}><u>Hand Grinded Organic Spices</u></h1>
            <div className="Row2">
               <Link to="/Products/GirGhee"><div className="r1c1"></div></Link>
               <Link to="/Products/GirGhee"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span><span style={{color:"white",fontSize:"1.5vw"}}>★</span>
                   <h2 className="classh2"><Link to="/Products/GirGhee" style={{textDecoration:"none",color:"white"}}>Lakadong Turmeric</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div style={{border:"1px solid white",paddingTop:"1%",paddingBottom:"1%",width:"34%",marginLeft:"33%"}}><Link to="/cart" style={{fontSize:"0.9vw",textDecoration:"none",color:"white"}}>Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>
                   <h2 className="classh2"><Link to="/Products/GirGhee" style={{textDecoration:"none",color:"white"}}>Kashmirir Red chilli Powder</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div style={{border:"1px solid white",paddingTop:"1%",paddingBottom:"1%",width:"34%",marginLeft:"33%"}}><Link to="/cart" style={{fontSize:"0.9vw",textDecoration:"none",color:"white"}}>Add to Cart +</Link></div>
               </div>
            </div>

            <h1 style={{fontSize:"3.8vw"}}><u>Luxury Products</u></h1>
            <div className="Row3">
               <Link to="/Products/GirGhee"><div className="r1c1"></div></Link>
               <Link to="/Products/GirGhee"><div className="r1c2"></div></Link>
               <div className="r2c1">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★</span><span style={{color:"white",fontSize:"1.5vw"}}>★</span>
                   <h2 className="classh2"><Link to="/Products/GirGhee" style={{textDecoration:"none",color:"white"}}>Kashmiri Saffron</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div style={{border:"1px solid white",paddingTop:"1%",paddingBottom:"1%",width:"34%",marginLeft:"33%"}}><Link to="/cart" style={{fontSize:"0.9vw",textDecoration:"none",color:"white"}}>Add to Cart +</Link></div>
                </div>
               <div className="r2c2">
                   <span style={{color:"yellow", fontSize:"1.5vw"}}>★★★★★</span>
                   <h2 className="classh2"><Link to="/Products/GirGhee" style={{textDecoration:"none",color:"white"}}>24k Gold Honey</Link></h2>
                   <h2 className="classh2">₹ 00.00</h2>
                   {/* <Button buttonStyle="btn--outline">Add to Cart +</Button> */}
                   <div style={{border:"1px solid white",paddingTop:"1%",paddingBottom:"1%",width:"34%",marginLeft:"33%"}}><Link to="/cart" style={{fontSize:"0.9vw",textDecoration:"none",color:"white"}}>Add to Cart +</Link></div>
               </div>
            </div>
        </div>

       <Cards/>

       {/* <Trending/>  */}
       <div className='trends'>
        <div className='trends_container'>
            <div className='trends_wrapper'>
            <ul className='trends_items'>
            {index0.map(i => {
                return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                })}
            </ul>
            <ul className='trends_items'>
            {index1.map(i => {
                return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                })}
            </ul>
            <ul className='trends_items'>
            {index2.map(i => {
                return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                })}
            </ul>
            </div>
        </div>
        </div> 
        <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 6 of 8</span>
        <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services5" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
        <span class="nextpage">——— Previous</span>
        <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="shopnow_dot show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="show"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span>
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services7" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}