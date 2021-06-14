import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/156 Aleovera-Juice.jpg';
import img1 from '../../../images2/182-Lakadong-Turmeric-Amended.jpg'

const index0=[0,1,2];
const index1=[3,4];

const imgSrc=[img0,img1,"https://i.ibb.co/7Kbqg5M/download.jpg","https://i.ibb.co/7Kbqg5M/download.jpg","https://i.ibb.co/7Kbqg5M/download.jpg"];
const text=['Juices', 'Lakadong Turmeric Powder', 'Coming Soon','Coming Soon','Coming Soon'];
const price=['', 99];
const show =[true, false, true, true, true];
const path=['/category/juices','/products/60aaafc02e79914b043dc0ca'];

export default function Riceflour(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Immunity</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items' >
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]} show={show[i]}/>
                    })}
                </ul>
                <ul className='trends_items' style={{width:"67%"}}>
                {window.innerWidth>680&&index1.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]} show={show[i]}/>
                    })}
                </ul>

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
