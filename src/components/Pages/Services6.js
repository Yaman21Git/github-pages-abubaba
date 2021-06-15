import React from 'react'
import '../../App.css'
import {Button} from "../button"
import Cards from "../Cards"
import ShopComp from "../shopComp"
import { Link } from 'react-router-dom';
import CommonSix from '../CommonSix'
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
const price=[99, 99, 149, 160, 149, 369, 320, 369, 369];
const path=['/products/60aaafc02e79914b043dc0ca','/products/60aab0902e79914b043dc0cb','/products/60abd1697b07ce47e470394c','/products/60aab16b2e79914b043dc0cc','/products/60abd2397b07ce47e470394d','/products/60aa71303f3ca14f407dc628','/products/60aa6f803f3ca14f407dc626','/products/60aa703d3f3ca14f407dc627','/products/60aa6b933f3ca14f407dc623'];

export default function Services6(){
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
        <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 6 of 7</span>
        <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services5" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
        <span class="nextpage">——— Previous</span>
        <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="shopnow_dot show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="show last"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        {/* <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span> */}
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services7" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}
