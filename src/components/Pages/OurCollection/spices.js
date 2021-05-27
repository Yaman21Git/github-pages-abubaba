import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/178-Raw-Forest-Honey-02.jpg'
import img1 from '../../../images2/187-ghee-Badri.jpg'
import img2 from '../../../images2/170-Mustard-Oil 1.jpg'

const index0=[0,1,2];

const imgSrc=[img0,img1,img2]
const text=['Honey', 'Ghee', 'Oil'];
const path=['/category/honey','/category/ghee','/category/oil'];
const show=[true, true, true];



export default function Spices(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Elixir Of Life</h1>
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
