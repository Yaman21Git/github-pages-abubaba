import React, {Component} from 'react'
import './homeBlog.css'
import HomeBlogItem from './homeBlogItem'

const blogsArray=[0,1,2];

class HomeBlog extends Component{
      constructor(props){
          super(props);
          this.state={
            src: ['images/pixels.jpg', 'images/pexels-pixabay-219794 1.jpg', 'images/pexels-skylar-kang-6045407 1.jpg','images/pexels-skylar-kang-6045407 1.jpg'],
            text: ['What is Organic farming in India Benefits and Methods', 'Create Your Family Basket', 'Stop Eating Color injected Tomatoes','Stop Eating Color injected Tomatoes'],
            path: ['/services','/services','/services','/services']
          };
      }

      render(){
        return (
          <>
          <div className='blogs'>
            <div className='blogs_container'>
                <div className='blogs_items'>
                {blogsArray.map(i => {
                    return <HomeBlogItem src={this.state.src[i]} text={this.state.text[i]} path={this.state.path[i]}/>
                  })}
                </div>
            </div>
          </div>
          </>
        );
    }
}

export default HomeBlog;