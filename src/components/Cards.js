import React, { Component } from 'react';
import './Cards.css';
import CardItem from './CardItem';

const index=[0,1,2];
class Cards extends Component{
  constructor (props) {
    super (props);
    this.state = {
        src: ['images/152-Brown-Rice.jpg', 'images/125-Chaat-Masala.jpg', 'images/191-Mango-Pickle.jpg','images/170-Mustard-Oil.jpg', 'images/170-Mustard-Oil.jpg'],
        text: ['RICE/FLOUR', 'KINGDOM OF SPICES', 'PICKLES/CHUTNEYS','ORGANIC PULSES','PURE RANGE OF HONEY','BREAKFAST ON TO GO'],
        // label: ['Grain','Grain','Grain','Grain','Grain'],
        path: ['/services','/services','/services','/services','/services','/services']
    }
  }
  render(){
  return (
    <>
    <div className='cards'>
      <h1>Our Collection</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {index.map(i => {
              return <CardItem src={this.state.src[i]} text={<u>{this.state.text[i]}</u>} path={this.state.path[i]}/>
            })}
          </ul>
          <ul className='cards__items'>
          {index.map(i => {
              return <CardItem src={this.state.src[i]} text={<u>{this.state.text[i]}</u>} path={this.state.path[i]}/>
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
  }
}

export default Cards;