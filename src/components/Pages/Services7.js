import React from 'react'
import '../../App.css'
import {Button} from "../button"
import Cards from "../Cards"
import ShopComp from "../shopComp"
import { Link } from 'react-router-dom';
// import Trending from "../Trending"

import '../Trending.css';
import TrendingItem from '../TrendingItems';
import img0 from '../../images2/Noni.jpg'
import img1 from '../../images2/179-Raw-Forest-Honey.jpg'
import img2 from '../../images2/199-Kesar.jpg'
import img3 from '../../images2/amala_juice.jpg'
import img4 from '../../images2/181-Peanut-Butter.jpg'
import img5 from '../../images2/168-Blueberries.jpg'
import img6 from '../../images2/01.jpg'
import img7 from '../../images2/173-White-Sesame-02.jpg'
import img8 from '../../images2/187-ghee-Badri.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Organic Noni Juice','Raw Forrest Honey','Kashmiri Saffron','Organic Amala Juice','Peanut Butter','Dried Blueberries','Organic Gir Ghee','White Sesame Oil','Badri Ghee'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/products/60acba31444bd63a3835cf46','/products/60aa9bf02e79914b043dc0b0','/products/60aa9c8b2e79914b043dc0b1','/products/60acbcc4444bd63a3835cf4a','/products/60aaa3532e79914b043dc0ba','/products/60aaa2852e79914b043dc0b9','/products/60acbbae444bd63a3835cf48','/products/60acbed7444bd63a3835cf4e','/products/60acbacd444bd63a3835cf47'];

export default function Services7(){
    return (
       <>
       <div className="service-container">
       <CommonSix/>

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
        <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 7 of 8</span>
        <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services6" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
        <span class="nextpage">——— Previous</span>
        <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="shopnow_dot show"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span>
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services8" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}
