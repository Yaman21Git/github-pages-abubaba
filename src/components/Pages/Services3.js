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
import img0 from '../../images2/156 Aleovera-Juice.jpg'
import img1 from '../../images2/158-Diabetes-Juice.jpg'
import img2 from '../../images2/160-Giloy-Juice.jpg'
import img3 from '../../images2/170-Mustard-Oil 1.jpg'
import img4 from '../../images2/171-Groundnut-Oil.jpg'
import img5 from '../../images2/172-Black-Sesame-Rectified.jpg'
import img6 from '../../images2/191-Mango-Pickle.jpg'
import img7 from '../../images2/192-Lemon-Pickle-amended-02.jpg'
import img8 from '../../images2/193-Lemon-Black-Pickle.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Aleovera Juice', 'Diabetic Juice', 'Giloy Juice','Mustard Oil','Groundnut Oil','Black Sesame','Mango Pickle','Lemon Pickle','Lemon Black Pickle'];
const price=[349, 549, 449, 510, 720, 1030, 320, 499, 430];
const path=['/products/60ac95d0444bd63a3835cf44','/products/60acbc61444bd63a3835cf49','/products/60ac964c444bd63a3835cf45','/products/60acbd4e444bd63a3835cf4b','/products/60acbdef444bd63a3835cf4c','/products/60acbe78444bd63a3835cf4d','/products/60aa6cbe3f3ca14f407dc624','/products/60aa6e353f3ca14f407dc625','/products/60aa90202e79914b043dc0ad'];

export default function Services3(){
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
        <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 3 of 7</span>
        <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services2" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
        <span class="nextpage">——— Previous</span>
        <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="shopnow_dot show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="show last"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        {/* <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span> */}
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services4" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}
