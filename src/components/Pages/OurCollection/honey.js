import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/161 Choco Nutty.jpg'
import img1 from '../../../images2/191-Mango-Pickle.jpg'
import img2 from '../../../images2/168-Blueberries.jpg'

const index0=[0,1,2];
const imgSrc=[img0,img1,img2];
const text=['Breakfast Bites', 'Pickles & Chutney', 'Superfoods'];
const path=['/category/breakfast','/category/pickles','/category/superfoods'];
const show=[true, true, true];

export default function Honey(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>WakeUp Mood</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items'>
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} show={show[i]}/>
                    })}
                </ul>
                </div>
            </div>
           </div> 
         </>
     );
}
