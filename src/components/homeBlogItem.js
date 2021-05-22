import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function HomeBlogItem(props) {
  return (
    <>
      <div className='blog_item'>
          <div className="blog_exp_more">
          {/* <div id="hide">
            <a href="/" className="btnexp">explore more</a>
          </div> */}
          <figure className='blog_item_wrap'>
            <img
              className='blog_item_img'
              alt='Image'
              src={props.src}
              style={{borderRadius:"20px 20px 0 0"}}
            />
          </figure>
          <div className='blog_item_info'>
              <div style={{height:"27%", borderBottom:"2px solid black", width:"40%", margin:"auto", marginBottom:"5%"}}></div>
              <p className='blog_item_text'>{props.text}</p>
          </div>
          </div>
      </div>
    </>
  );
}

export default HomeBlogItem;