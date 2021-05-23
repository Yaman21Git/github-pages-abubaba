import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

import img0 from '../../../images2/190Mango-Chutney.jpg'
import img1 from '../../../images2/191-Mango-Pickle.jpg'
import img2 from '../../../images2/192-Lemon-Pickle-amended-02.jpg'
import img3 from '../../../images2/193-Lemon-Black-Pickle.jpg'
import img4 from '../../../images2/194-Green-Chilli-Pickle.jpg'
import img5 from '../../../images2/195 Garlic-Pickle.jpg'
import img6 from '../../../images2/Lemon-Chutney.jpg'

const index0=[0,1,2];
const index1=[3,4,5];
const index2=[6];
const imgSrc=[img0,img1,img2,img3,img4,img5,img6];
const text=['Mango Chutney', 'Mango Pickle', 'Lemon Pickle','Lemon Black Pickle','Green Chilli Pickle', 'Garlic Pickle','Lemon Chutney'];
const price=['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'];
const path=['/cart','/cart','/cart','/cart','/cart','/cart','/cart'];

export default function Pickles(){
     return(
         <>
           <div className='trends'>
           <h1 style={{marginBottom:"5%"}}>Pickles & Chutney Tales</h1>
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
                <ul className='trends_items' style={{width:"33%"}}>
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