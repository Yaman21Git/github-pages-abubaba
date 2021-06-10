import React, { Component } from 'react';
import './Cards.css';
import '../App.css';
import CardItem from './CardItem';

import img0 from '../images2/156 Aleovera-Juice.jpg';
import img1 from '../images2/187 ghee-gir.jpg';
import img2 from '../images2/142-Chana-.jpg';
import img3 from '../images2/186-Lemon-LIme-salt.jpg';
import img4 from '../images2/161 Choco Nutty.jpg';
import img5 from '../images2/DSC02735.jpg';

const srcImg=[img0,img1,img2,img3,img4,img5];

const index=[0,1,2];
const index2=[3,4,5];
  // const items=[];
  // for (const [index, value] of elements.entries()) {
  //   items.push(<li key={index}>{value}</li>)
  // }

class Cards extends Component{
  constructor (props) {
    super (props);
    this.state = {
        text: ["IMMUNITY", 'ELIXIR OF LIFE', 'ANCIENT LIVING','KINGDOM OF SPICES','WAKE UP MODD','LIMITED EDITION'],
        path: ['/OurCollection/Immunity','/OurCollection/Elixir-Of-Life','/OurCollection/Ancient-Living','/OurCollection/Kingdom-Of-Spices','/OurCollection/Wakeup-Mood','/OurCollection/Limited-Edition']
    }
  }

  render(){

  return (
    <>
    <div className='cards'>
      <h1>Our Collection</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
          {index.map(i => {
              return <CardItem src={srcImg[i]} text={<u>{this.state.text[i]}</u>} path={this.state.path[i]}/>
            })}
          </div>
          <div className='cards__items'>
          {index2.map(i => {
              return <CardItem src={srcImg[i]} text={<u>{this.state.text[i]}</u>} path={this.state.path[i]}/>
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
  }
}

export default Cards;
