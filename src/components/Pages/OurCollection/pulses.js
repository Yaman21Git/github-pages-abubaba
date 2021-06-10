import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/127 Coriander-Powder.jpg'
import img1 from '../../../images2/125-Chaat-Masala.jpg'
import img2 from '../../../images2/Peri-Peri-.jpg'
import img3 from '../../../images2/182-Lakadong-Turmeric-Amended.jpg'
import img4 from '../../../images2/184-Kashmiri-Red-Chilli-03.jpg'

const index0=[0,1,2];
const index1=[3,4];
const imgSrc=[img0,img1,img2,img3,img4];
const text=['Spices', 'Masala', 'Exotic Seasonings','Lakadong Turmeric Powder','Kashmiri Red Chilli'];
const price=['','','', 99, 99];
const show=[true, true, true, false, false];
const path=['/category/spices','/category/masala','/category/exotic','/products/60aaafc02e79914b043dc0ca','/products/60aab0902e79914b043dc0cb'];

export default function Pulses(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Kingdom Of Spices</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items'>
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]} show={show[i]}/>
                    })}
                </ul>
                {window.innerWidth>680&&<ul className='trends_items' style={{width:"67%"}}>
                {index1.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]} show={show[i]}/>
                    })}
                </ul>
                }

                {window.innerWidth<=680&&<ul className='trends_items' style={{width:"100%"}}>
                {index1.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]} show={show[i]}/>
                    })}
                </ul>
                }
                </div>
            </div>
           </div> 
         </>
     );
}
