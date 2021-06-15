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
import img0 from '../../images2/136-Turmeric-05.jpg'
import img1 from '../../images2/133-Red-Chilli-Powder.jpg'
import img2 from '../../images2/128-Cumin-Powder.jpg'
import img3 from '../../images2/Tulsi-HOney-revised (2).jpg'
import img4 from '../../images2/Royal-Saffron-white-honey.jpg'
import img5 from '../../images2/177-Himalyan-white-Honey-02.jpg'
import img6 from '../../images2/161 Choco Nutty.jpg'
import img7 from '../../images2/DSC01648.jpg'
import img8 from '../../images2/163-Museli-Munch.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8];
const text=['Organic Turmeric Powder', 'Organic Red Chilli Powder', 'Organic Cumin Powder','Organic Tulsi Honey','Royal Saffron White','Himalayan White Honey','Choco Nutty Granula','Fruit-n-nut Granola','Classic Museli'];
const price=[250, 450, 215, 540, 595, 485, 380, 410, 610];
const path=['/products/60aaaf1e2e79914b043dc0c9','/products/60aaad322e79914b043dc0c6','/products/60aaa9db2e79914b043dc0c1','/products/60aa9e252e79914b043dc0b3','/products/60aa9d522e79914b043dc0b2','/products/60aa9b512e79914b043dc0af','/products/60aa9f242e79914b043dc0b4','/products/60aaa43e2e79914b043dc0bb','/products/60aa9ff82e79914b043dc0b5'];

export default function Services(){
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
        <span class="pageno">Page 1 of 7</span>
        <span class="shopnow_dot shopdot_first"><Link to="/services" style={{textDecoration:"none",color:"black"}}>1</Link></span>
        <span class="show"><Link to="/services2" style={{textDecoration:"none",color:"black"}}>2</Link></span>
        <span class="show"><Link to="/services3" style={{textDecoration:"none",color:"black"}}>3</Link></span>
        <span class="show"><Link to="/services4" style={{textDecoration:"none",color:"black"}}>4</Link></span>
        <span class="show"><Link to="/services5" style={{textDecoration:"none",color:"black"}}>5</Link></span>
        <span class="show"><Link to="/services6" style={{textDecoration:"none",color:"black"}}>6</Link></span>
        <span class="show last"><Link to="/services7" style={{textDecoration:"none",color:"black"}}>7</Link></span>
        {/* <span class="show"><Link to="/services8" style={{textDecoration:"none",color:"black"}}>8</Link></span> */}
        <span class="nextpage">Next ———</span>
        <span class="shopnow_dot1"><Link to="/services2" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
       </div>
       </>
    );
}
