import React from 'react';
import { Link } from 'react-router-dom';

function HomeBlogItem(props) {
  return (
    <>
      <div className='blog_item'>
          <figure className='blog_item_wrap'>
            <img
              className='blog_item_img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='blog_item_info'>
              <hr></hr>
              <p className='blog_item_text'>{props.text}</p>
          </div>
      </div>
    </>
  );
}

export default HomeBlogItem;