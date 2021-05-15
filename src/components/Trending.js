import React, { Component } from 'react';
import './Trending.css';
import TrendingItem from './TrendingItems';

const index=[0,1,2];
class Trending extends Component{
  constructor (props) {
    super (props);
    this.state = {
        src: ['/images/amala_juice.jpg', '/images/Tulsi-HOney-revised (2).jpg', '/images/DSC01648.jpg','/images/170-Mustard-Oil.jpg', '/images/170-Mustard-Oil.jpg','/images/170-Mustard-Oil.jpg'],
        text: ['Organic Amla juice', 'Organic Tulsi Honey', 'Fruit-n-nut Granola','Cold Pressed Groundnut Oil','Homemade Garlic Pickle','Organic Red Kidney Bean Pulses'],
        price:['₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00','₹ 00.00'],
        // label: ['Grain','Grain','Grain','Grain','Grain'],
        path: ['/services','/services','/services','/services','/services','/services']
    }
  }
  render(){
  return (
    <>
    <div className='trends'>
      <h1>Trending</h1>
      <div className='trends_container'>
        <div className='trends_wrapper'>
          <ul className='trends_items'>
          {index.map(i => {
              return <TrendingItem src={this.state.src[i]} text={this.state.text[i]} path={this.state.path[i]} price={this.state.price[i]}/>
            })}
          </ul>
          <ul className='trends_items'>
          {index.map(i => {
              return <TrendingItem src={this.state.src[i]} text={this.state.text[i]} path={this.state.path[i]} price={this.state.price[i]}/>
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