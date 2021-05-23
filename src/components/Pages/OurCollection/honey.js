import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/177-Himalyan-white-Honey-02.jpg'
import img1 from '../../../images2/179-Raw-Forest-Honey.jpg'
import img2 from '../../../images2/199-Kesar.jpg'
import img3 from '../../../images2/Royal-Saffron-white-honey.jpg'
import img4 from '../../../images2/Tulsi-HOney-revised (2).jpg'

const index0=[0,1,2];
const index1=[3,4];
const imgSrc=[img0,img1,img2,img3,img4];
const text=['Himalyan White Honey', 'Raw Forest Honey', 'Kashmiri Saffron','Royal Saffron White Honey','Tulsi Honey'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/cart','/cart','/cart','/cart','/cart'];

export default function Honey(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Natural Honey Dew</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items'>
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items' style={{width:"67%"}}>
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