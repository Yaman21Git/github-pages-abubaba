import React from 'react'
import '../../App.css'
import {Button} from '../button'

export default function Blogs(){
    return (
        <>
          <div className="blogContainer">
              <div className="blogtop" style={{height:"400px"}}>
                 <h1 style={{fontSize:"80px"}}>BLOGS</h1>
                 <div className="subBlog">
                    <ul>
                        <li><a style={{textDecoration:"none"}} href="/">⚫ Blogger</a></li>
                        <li><a style={{textDecoration:"none"}} href="/">⚫ Blogs</a></li>
                        <li><a style={{textDecoration:"none"}} href="/">⚫ Cooking</a></li>
                        <li><a style={{textDecoration:"none"}} href="/">⚫ Food</a></li>
                        <li><a style={{textDecoration:"none"}} href="/">⚫ Health</a></li>
                    </ul>
                 </div>
                 <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
              </div>
              <a href="/">Recent post ></a>
              <div className="blogPost">
                <div className="Fblog"></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1 style={{color:"white"}}>
                        What is Organic farming in India | Benefits and Methods
                        </h1>
                        <p>here comes the like, comments, views icons</p>
                        <p>Organic farming is one the most ancient agriculture method in which the farmer use  ecologically based pest controls and biological fertilizers. The increasing population of the world is the biggest problem today.</p>
                        <Button buttonStyle='btn--outline'>Read More></Button>
                    </div>
                    
                </div>
                <h2>TAGS:</h2>
                <a href="/"><u>Organic farming</u></a>
                <a href="/"><u>Organic farming advantages</u></a>
                <a href="/"><u>Organic farming and its benefit</u></a>
                <a href="/"><u>Organic farming definition</u></a>
              </div>
          </div>
        </>
    );
}