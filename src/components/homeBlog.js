import React, {Component} from 'react'
import './homeBlog.css'
import '../App.css';
import HomeBlogItem from './homeBlogItem'

import img0 from '../images2/pexels.jpg'
import img1 from '../images2/pexels-pixabay-219794 1.jpg'
import img2 from '../images2/pexels-skylar-kang-6045407 1.jpg'

const blogsArray=[0,1,2];
const srcImg=[img0,img1,img2];

class HomeBlog extends Component{
      constructor(props){
          super(props);
          this.state={
            text: ['What is Organic farming in India Benefits and Methods', 'Create Your Family Basket', 'Stop Eating Color injected Tomatoes','Stop Eating Color injected Tomatoes'],
            path: ['/services','/services','/services','/services']
          };
      }

      render(){
        return (
          <>
          <div className='blogs'>
            <h1>Latest Blogs</h1>
            <div className='blogs_container'>
                <div className='blogs_items'>
                {blogsArray.map(i => {
                    return <HomeBlogItem src={srcImg[i]} text={this.state.text[i]} path={this.state.path[i]}/>
                  })}
                </div>
                {/* <a href="/blogs">Explore more</a> */}
            </div>
          </div>
          </>
        );
    }
}

export default HomeBlog;