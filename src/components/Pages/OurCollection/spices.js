import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img14 from '../../../images2/136-Turmeric-05.jpg'
import img11 from '../../../images2/133-Red-Chilli-Powder.jpg'
import img6 from '../../../images2/128-Cumin-Powder.jpg'
import img8 from '../../../images2/130-Garam-Masala.jpg'
import img9 from '../../../images2/131-Pav-Bhaji-Masala (2).jpg'
import img1 from '../../../images2/123 Black-Pepper-Whole.jpg'
import img10 from '../../../images2/132-Rajmah-Masala.jpg'
import img12 from '../../../images2/134-Sambhar-Masala (2).jpg'
import img13 from '../../../images2/135-Shahi-Paneer.jpg'
import img0 from '../../../images2/121-Black-Pepper-Powder.jpg'
import img2 from '../../../images2/124 GReen-Cardmom.jpg'
import img5 from '../../../images2/127 Coriander-Powder.jpg'
import img4 from '../../../images2/126 Chana-Masala.jpg'
import img3 from '../../../images2/125-Chaat-Masala.jpg'
import img7 from '../../../images2/129-Dal-Makhni-01 (2).jpg'
import img15 from '../../../images2/182-Lakadong-Turmeric-Amended.jpg'
import img16 from '../../../images2/183 Kashmiri-Red-Chilli.jpg'
import img17 from '../../../images2/186-Lemon-LIme-salt.jpg'
import img18 from '../../../images2/Kitchen-King-02.jpg'
import img19 from '../../../images2/Peri-Peri-.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6,7,8];
const index3=[9,10,11];
const index4=[12,13,14];
const index5=[15,16,17];
const index6=[18,19];

const imgSrc=[img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19];
const text=['Black Pepper Powder', 'Black Pepper Whole', 'Green Cardamom','Chaat Masala','Chana Masala', 'Coriander Powder','Cumin Powder','Dal makhni Masala','Garam Masala','Pav Bhaji Masala','Rajma Masala','Red Chilli Powder','Sambhar Masala','Shahi Paneer Masala','Turmeric Powder','Lakadong Turmeric','Kashmiri Red Chilli','Lemon Lime Salt','Kitchen King','Peri Peri'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/products/60aaa63a2e79914b043dc0bc','/products/60aaa6ea2e79914b043dc0bd','/products/60aaa8382e79914b043dc0be','/products/60aaa8b32e79914b043dc0bf','/products/60abcf5d7b07ce47e470394b','/products/60aaa9442e79914b043dc0c0','/products/60aaa9db2e79914b043dc0c1','/products/60aaaa672e79914b043dc0c2','/products/60aaab422e79914b043dc0c3','/products/60aaabfa2e79914b043dc0c4','/products/60aaaca02e79914b043dc0c5','/products/60aaad322e79914b043dc0c6','/products/60aaadf42e79914b043dc0c7','/products/60aaae9b2e79914b043dc0c8','/products/60aaaf1e2e79914b043dc0c9','/products/60aaafc02e79914b043dc0ca','/products/60aab0902e79914b043dc0cb','/products/60abd1697b07ce47e470394c','/products/60aab16b2e79914b043dc0cc','/products/60abd2397b07ce47e470394d'];

export default function Spices(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Kingdom of Spices</h1>
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
                <ul className='trends_items'>
                {index2.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items'>
                {index3.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items'>
                {index4.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items'>
                {index5.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                <ul className='trends_items' style={{width:"67%"}}>
                {index6.map(i => {
                    return <TrendingItem src={imgSrc[i]} text={text[i]} path={path[i]} price={price[i]}/>
                    })}
                </ul>
                </div>
            </div>
           </div> 
         </>
     );
}
