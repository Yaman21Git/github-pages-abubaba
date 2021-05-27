import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/144-Chitra-Kidney-Beans.jpg'
import img1 from '../../../images2/154-White-Rice-Basmati.jpg'
import img2 from '../../../images2/150-Wheat-Flour.jpg'

const index0=[0,1,2];

const imgSrc=[img0,img1,img2]
const text=['Pulses', 'Rice', 'Flour'];
const path=['/category/pulses','/category/rice','/category/flour'];
const show=[true, true, true];

export default function Pickles(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Ancient Living</h1>
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
