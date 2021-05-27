import React, { Component } from 'react';
import './Cards.css';
import '../App.css';
import CardItem from './CardItem';

import img0 from '../images2/152-Brown-Rice.jpg';
import img1 from '../images2/125-Chaat-Masala.jpg';
import img2 from '../images2/191-Mango-Pickle.jpg';
import img3 from '../images2/139-Arhar.jpg';
import img4 from '../images2/Tulsi-HOney-revised (2).jpg';
import img5 from '../images2/163-Museli-Munch.jpg';

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
        text: ["Immunity", 'Elixir Of Life', 'Ancient Living','Kingdom Of Spices','Wakeup Mood','Limited Edition'],
        path: ['/OurCollection/Immunity','/OurCollection/Elixir-Of-Life','/OurCollection/Ancient-Living','/OurCollection/Kingdom-Of-Spices','/OurCollection/Wakeup-Mood','/OurCollection/Limited-Edition']
    }
  }

  render(){

  return (
    <>
    <div className='cards'>
      <h1 style={{marginBottom:"4%"}}>Our Collection</h1>
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
