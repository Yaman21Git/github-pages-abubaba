import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/139-Arhar.jpg'
import img1 from '../../../images2/142-Chana-.jpg'
import img2 from '../../../images2/144-Chitra-Kidney-Beans.jpg'
import img3 from '../../../images2/148-Red-Kidney-Beans-.jpg'
import img4 from '../../../images2/149-Urad.jpg'
import img5 from '../../../images2/143-chick-pea.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const imgSrc=[img0,img1,img2,img3,img4,img5];
const text=['Organic Arhar Dal', 'Organic Chana Dal', 'Chitra Kidney Beans','Red Kidney Beans','Organic Urad Dal', 'White Chick Pea'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/cart','/cart','/cart','/cart','/cart','/cart'];

export default function Pulses(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Vibrant Pulses</h1>
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