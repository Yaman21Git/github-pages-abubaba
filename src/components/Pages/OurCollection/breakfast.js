import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/161 Choco Nutty.jpg'
import img1 from '../../../images2/163-Museli-Munch.jpg'
import img2 from '../../../images2/165 Chia Seeds.jpg'
import img3 from '../../../images2/166-Flax-Seed.jpg'
import img4 from '../../../images2/167-muskmelon-seeds.jpg'
import img5 from '../../../images2/168-Blueberries.jpg'
import img6 from '../../../images2/181-Peanut-Butter.jpg'
import img7 from '../../../images2/DSC01648.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7];
const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7];
const text=['Choco Nutty', 'Museli Munch', 'Chia Seeds','Flax Seeds','Muskmelon Seeds','Dried Blueberries','Peanut Butter','Fruit-n-nut Granola'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/products/60aa9f242e79914b043dc0b4','/products/60aa9ff82e79914b043dc0b5','/products/60aaa08e2e79914b043dc0b6','/products/60aaa1342e79914b043dc0b7','/products/60aaa1e02e79914b043dc0b8','/products/60aaa2852e79914b043dc0b9','/products/60aaa3532e79914b043dc0ba','/products/60aaa43e2e79914b043dc0bb'];

export default function Breakfast(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Breakfast Bites</h1>
            <div className='trends_container'>
                <div className='trends_wrapper'>
                <ul className='trends_items'>
                {index0.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items' >
                {index1.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items' style={{width:"67%"}}>
                {index2.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                </div>
            </div>
           </div> 
         </>
     );
}
