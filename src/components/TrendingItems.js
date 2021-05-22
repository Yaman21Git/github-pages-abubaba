import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function TrendingItem(props) {
  return (
    <>
      <li className='trending_item'>
        <Link className='trending_item_link' to={props.path}>
          <figure className='trending_item_pic-wrap'>
            <img
              className='trending_item_img'
              alt='Trending Image'
              src={props.src}
            />
          </figure>

          <div className='trending_item_info'>
              <h2>{props.text}</h2>
              <h3>{props.price}</h3>
              <a href="/services" style={{textDecoration:"none"}}><h5 className='trending_item_text'>Add to cart +</h5></a>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TrendingItem;