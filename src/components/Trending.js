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
        price:[299, 540, 410, 720, 369, 160],
        // label: ['Grain','Grain','Grain','Grain','Grain'],
        path: ['/products/60acbcc4444bd63a3835cf4a','/products/60aa9e252e79914b043dc0b3','/products/60aaa43e2e79914b043dc0bb','/products/60acbdef444bd63a3835cf4c','/products/60aa703d3f3ca14f407dc627','/products/60aa79bb3f3ca14f407dc62b']
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
