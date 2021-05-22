import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './button'
import '../App.css';

function ShopItem(props) {
  return (
    <>
      <li className='cards__item1'>
        <Link className='cards__item__link1' to={props.path}>
          <figure className='cards__item__pic-wrap1'>
            <img
              className='cards__item__img1'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info1'>
            <h5 className='cards__item__text1'>{props.text}</h5>
          </div>
          <div className="blackPortion1">
           <Button buttonStyle="btn--outline">Add to Cart +</Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ShopItem;