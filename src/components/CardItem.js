import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {Button} from '../components/button'

function CardItem(props) {
  return (
    <>
      <div className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <Link to={props.path}>
              <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            /></Link>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>
                {props.text}
                <p><Link to={props.path}><button className="expmore" type="button">Explore More</button></Link></p>
              </h5>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default CardItem;