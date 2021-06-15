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
import img0 from '../../images2/126 Chana-Masala.jpg'
import img1 from '../../images2/125-Chaat-Masala.jpg'
import img2 from '../../images2/129-Dal-Makhni-01 (2).jpg'
import img3 from '../../images2/143-chick-pea.jpg'
import img4 from '../../images2/173-White-Sesame-02.jpg'
import img5 from '../../images2/148-Red-Kidney-Beans-.jpg'
import img6 from '../../images2/165 Chia Seeds.jpg'
import img7 from '../../images2/166-Flax-Seed.jpg'
import img8 from '../../images2/167-muskmelon-seeds.jpg'


const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Chana Masala', 'Chaat Masala', 'Dal Makhni','Chick Pea','White Sesame Oil','Red Kedney Beans','Chia Seeds','Flax Seeds','Musk Melon Seeds'];
const price=[150, 150, 215, 160, 809, 160, 200, 140, 170];
const path=['/products/60abcf5d7b07ce47e470394b','/products/60aaa8b32e79914b043dc0bf','/products/60aaaa672e79914b043dc0c2','/products/60aa978f2e79914b043dc0ae','/products/60acbed7444bd63a3835cf4e','/products/60aa79bb3f3ca14f407dc62b','/products/60aaa08e2e79914b043dc0b6','/products/60aaa1342e79914b043dc0b7','/products/60aaa1e02e79914b043dc0b8'];

export default function Services4(){
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
        <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 4 of 7</span>
        <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services3" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
        <span class="nextpage">——— Previous</span>
        <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="shopnow_dot show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="show last"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        {/* <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span> */}
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services5" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}
