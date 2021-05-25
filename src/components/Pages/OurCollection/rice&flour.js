import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/150-Wheat-Flour.jpg'
import img1 from '../../../images2/151-Bajra-Flour.jpg'
import img2 from '../../../images2/152-Brown-Rice.jpg'
import img3 from '../../../images2/154-White-Rice-Basmati.jpg'
import img4 from '../../../images2/196-Bajra.jpg'
import img5 from '../../../images2/197-Poha.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const imgSrc=[img0,img1,img2,img3,img4,img5];
const text=['Organic Wheat Flour', 'Organic Bajra Flour', 'Organic Brown rice','White Rice Basmati','Organic Bajra', 'Organic Poha'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/products/60aa2bb368aee53db07ae16c','/products/60ab714757cf811148043aa5','/products/60aa62f8a823f64adc11d6de','/products/60aa655fa823f64adc11d6df','/products/60ab6ee957cf811148043aa3','/products/60aa66aba823f64adc11d6e0'];

export default function Riceflour(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Farmer's Rice & Flour</h1>
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
                </div>
            </div>
           </div> 
         </>
     );
}
