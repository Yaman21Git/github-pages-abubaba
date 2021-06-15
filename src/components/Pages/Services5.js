import React from 'react'
import '../../App.css'
import {Button} from "../button"
import Cards from "../Cards"
import ShopComp from "../shopComp"
import CommonSix from '../CommonSix'
import { Link } from 'react-router-dom';
// import Trending from "../Trending"

import '../Trending.css';
import TrendingItem from '../TrendingItems';
import img0 from '../../images2/01.jpg'
import img1 from '../../images2/181-Peanut-Butter.jpg'
import img2 from '../../images2/168-Blueberries.jpg'
import img3 from '../../images2/130-Garam-Masala.jpg'
import img4 from '../../images2/131-Pav-Bhaji-Masala (2).jpg'
import img5 from '../../images2/123 Black-Pepper-Whole.jpg'
import img6 from '../../images2/132-Rajmah-Masala.jpg'
import img7 from '../../images2/134-Sambhar-Masala (2).jpg'
import img8 from '../../images2/135-Shahi-Paneer.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Organic Gir Ghee', 'Peanut Butter','Dried Blueberries','Organic Garam Masala','Pav Bhaji Masala','Black Pepper Whole','Rajmah Masala','Sambhar Masala','Shahi Paneer Masala'];
const price=[1599, 420, 380, 140, 235, 125, 115, 205, 215];
const path=['/products/60acbbae444bd63a3835cf48','/products/60aaa3532e79914b043dc0ba','/products/60aaa2852e79914b043dc0b9','/products/60aaab422e79914b043dc0c3','/products/60aaabfa2e79914b043dc0c4','/products/60aaa6ea2e79914b043dc0bd','/products/60aaaca02e79914b043dc0c5','/products/60aaadf42e79914b043dc0c7','/products/60aaae9b2e79914b043dc0c8'];

export default function Services5(){
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
        <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 5 of 7</span>
        <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services4" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
        <span class="nextpage">——— Previous</span>
        <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="shopnow_dot show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="show last"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        {/* <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span> */}
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services6" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}
