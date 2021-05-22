import React from 'react';
import './shopComp.css';
import '../App.css';
import ShopItem from './shopItems';

function ShopComp() {
  return (
    <div className='cards1'>
      <div className='cards__container1'>
        <div className='cards__wrapper1'>
          <ul className='cards__items1'>
            <ShopItem
              src='images/171-Groundnut-Oil.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/services'
            />
            <ShopItem
              src='images/171-Groundnut-Oil.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
            <ShopItem
              src='images/172-Black-Sesame-Rectified.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
          </ul>
          <ul className='cards__items1'>
            <ShopItem
              src='images/170-Mustard-Oil.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <ShopItem
              src='images/170-Mustard-Oil.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <ShopItem
              src='images/170-Mustard-Oil.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items1'>
            <ShopItem
              src='images/171-Groundnut-Oil.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/services'
            />
            <ShopItem
              src='images/171-Groundnut-Oil.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
            <ShopItem
              src='images/172-Black-Sesame-Rectified.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopComp;