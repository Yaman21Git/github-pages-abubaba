import React, { Component } from 'react';
import './Trending.css';
import '../App.css';
import TrendingItem from './TrendingItems';

import img0 from '../images2/amala_juice.jpg';
import img1 from '../images2/Tulsi-HOney-revised (2).jpg';
import img2 from '../images2/DSC01648.jpg';
import img3 from '../images2/171-Groundnut-Oil.jpg';
import img4 from '../images2/195 Garlic-Pickle.jpg';
import img5 from '../images2/148-Red-Kidney-Beans-.jpg';

const index=[0,1,2];
const index2=[3,4,5];
const imgSrc=[img0,img1,img2,img3,img4,img5];
class Trending extends Component{
  constructor (props) {
    super (props);
    this.state = {
        text: ['Organic Amla juice', 'Organic Tulsi Honey', 'Fruit-n-nut Granola','Cold Pressed Groundnut Oil','Homemade Garlic Pickle','Red Kidney Bean Pulses'],
        price:['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'],
        // label: ['Grain','Grain','Grain','Grain','Grain'],
        path: ['/services','/services','/services','/services','/services','/services']
    }
  }
  render(){
  return (
    <>
    <div className='trends'>
      <h1 style={{marginBottom:"3%"}}>Trending</h1>
      <div className='trends_container'>
        <div className='trends_wrapper'>
          <ul className='trends_items'>
          {index.map(i => {
              return <TrendingItem src={imgSrc[i]} text={this.state.text[i]} path={this.state.path[i]} price={this.state.price[i]}/>
            })}
          </ul>
          <ul className='trends_items'>
          {index2.map(i => {
              return <TrendingItem src={imgSrc[i]} text={this.state.text[i]} path={this.state.path[i]} price={this.state.price[i]}/>
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
  }
}

export default Trending;