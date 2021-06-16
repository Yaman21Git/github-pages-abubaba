import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/DSC02735.jpg'
import img1 from '../../../images2/Royal-Saffron-white-honey.jpg'
import img2 from '../../../images2/199-Kesar.jpg'
import img3 from '../../../images2/187-ghee-Badri.jpg'

const index0=[0,1,2];
const index1=[3];
const imgSrc=[img0,img1,img2,img3];
const text=['24k Gold Honey', 'Royal Saffron White Honey', 'Kashmiri Kesar','Badri Ghee'];
const price=[1595, 595, 510, 1299,'₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/products/60aea48122472a5940a04a28 ','/products/60aa9d522e79914b043dc0b2','/products/60aa9c8b2e79914b043dc0b1','/products/60acbacd444bd63a3835cf47'];

export default function Breakfast(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Limited Edition</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items'>
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                {window.innerWidth>680&&<ul className='trends_items' style={{width: "33%"}}>
                {index1.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>}

                {window.innerWidth<=680&&<ul className='trends_items' style={{width: "100%"}}>
                {index1.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>}
                </div>
            </div>
           </div> 
         </>
     );
}
