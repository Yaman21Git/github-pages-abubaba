import React from 'react'
import '../../App.css'
import {Button} from '../button'
import {Link} from 'react-router-dom';

export default function Blogs(){
    return (
        <>
          <div className="blogContainer">
              <div className="blogtop" style={{height:"38%", paddingTop:"2.7%"}}>
                 <h1 style={{fontSize:"5.3vw"}}>Blogs</h1>
                 <div className="subBlog">
                    <ul>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Blogger</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Blogs</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Cooking</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Food</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Health</Link></li>
                    </ul>
                 </div>
                 <div className="dateCalender" style={{float:"left",width:"50%", marginLeft:"30%", marginTop:"4.5%", fontSize:"1vw"}}><h2>16-03-2021</h2><h3>View Calender ^</h3></div>
                 <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
              </div>
            <Link to="/blogs"><a href="/blogs">Recent post ></a></Link>
            <div className="blogPost">
                <div className="Fblog"></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1 style={{color:"white",fontSize:"2.3vw", marginBottom:"7%",textAlign:"left"}}>
                        What is Organic farming in India | Benefits and Methods
                        </h1>
                        <p style={{marginBottom:"7%",fontSize:"0.6vw"}}><span className="likes"><i class="fal fa-eye" ></i> 403 views </span> <span className="likes"><i class="far fa-thumbs-up"></i> 403 likes</span>  <span className="likes"><i class="far fa-comment-alt"></i> 403 comments</span></p>
                        <p style={{fontSize:"0.7vw"}}>Organic farming is one the most ancient agriculture method in which the farmer use  ecologically based pest controls and biological fertilizers. The increasing population of the world is the biggest problem today.</p>
                        {/* <div className="readmorebtn"><Button buttonStyle='btn--round-whitebor'>Read More > </Button></div> */}
                        <Link to="/Blog_read/Blog1"><button style={{border:"1px solid white", marginBottom:"5%"}} className="shopNowbtn" type="submit">Read More ></button></Link>
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