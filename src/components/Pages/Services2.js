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
import img0 from '../../images2/121-Black-Pepper-Powder.jpg'
import img1 from '../../images2/179-Raw-Forest-Honey.jpg'
import img2 from '../../images2/127 Coriander-Powder.jpg'
import img3 from '../../images2/139-Arhar.jpg'
import img4 from '../../images2/142-Chana-.jpg'
import img5 from '../../images2/149-Urad.jpg'
import img6 from '../../images2/150-Wheat-Flour.jpg'
import img7 from '../../images2/pexels-tirachard-kumtanom-347140 1.jpg'
import img8 from '../../images2/187-ghee-Badri.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Black Pepper Powder', 'Raw Forest Honey', 'Organic Coriander Powder','Organic Arhar Dal','Organic Chana Dal','Organic Urad Dal','Organic Wheat Flour','Luxury Gold Honey','Badri Ghee'];
const price=[280, 615, 205, 165, 160, 260, 199, 1595, 1299];
const path=['/products/60aaa63a2e79914b043dc0bc','/products/60aa9bf02e79914b043dc0b0','/products/60aaa9442e79914b043dc0c0','/products/60ab737b57cf811148043aa7','/products/60aa77933f3ca14f407dc629','/products/60aa7a753f3ca14f407dc62c','/products/60aa2bb368aee53db07ae16c','/products/60aea48122472a5940a04a28','/products/60acbacd444bd63a3835cf47'];

export default function Services2(){
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
        {/* {window.innerWidth>680&&<div> */}
            <span class="pageno" style={{marginLeft:"10%",marginRight:"3%"}}>Page 2 of 7</span>
            <span class="shopnow_dot1" style={{marginRight:"-13%",textAlign:"right"}}><Link to="/services" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
            <span class="nextpage">——— Previous</span>
            <span class="shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
            <span class="shopnow_dot show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
            <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
            <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
            <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
            <span class="show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
            <span class="show last"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
            {/* <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span> */}
            <span class="nextpage">Next ———</span>
            <span class="shopnow_dot1"><Link to="/services3" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       {/* </div>} */}

       </div>
       </>
    );
}
