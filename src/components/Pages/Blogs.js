import React from 'react'
import '../../App.css'
import {Button} from '../button'
import {Link} from 'react-router-dom';

import img2 from '../../images2/turmeric-powder.jpg'
import img3 from '../../images2/turmeric-powder.jpg'
import img4 from '../../images2/mohammad-amiri-4v_fCBw_kqg-unsplash.jpg'
import img5 from '../../images2/turmeric-powder.jpg'

export default function Blogs(){
    return (
        <>
          <div className="blogContainer">
            <div className="blogtop">
                 <h1 className="blogsheading">Blogs</h1>
                 <div className="subBlog">
                    <ul>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Blogger</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Blogs</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Cooking</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Food</Link></li>
                        <li><Link to="/blogs" className="heads" style={{textDecoration:"none"}} >⚫ Health</Link></li>
                    </ul>
                 </div>
                 <div className="dateCalender"><h2>16-03-2021</h2><h3>View Calender ˅</h3></div>
                 <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="recent-post"><Link to="/blogs"><a href="/blogs">Recent post ></a></Link></div>

            <div className="blogPost">
                <div className="Fblog"></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1>
                        What is Organic farming in India | Benefits and Methods
                        </h1>
                        <p className="likes-para"><span className="likes"><i class="fal fa-eye" ></i> 403 views </span> <span className="likes"><i class="far fa-thumbs-up"></i> 403 likes</span>  <span className="likes"><i class="far fa-comment-alt"></i> 403 comments</span></p>
                        <p className="material">Organic farming is one the most ancient agriculture method in which the farmer use  ecologically based pest controls and biological fertilizers. The increasing population of the world is the biggest problem today.</p>
                        {/* <div className="readmorebtn"><Button buttonStyle='btn--round-whitebor'>Read More > </Button></div> */}
                        <Link to="/Blog_read/Blog1"><button style={{border:"1px solid white", marginBottom:"5%"}} className="shopNowbtn" type="submit">Read More ></button></Link>
                    </div>
                    
                </div>
            </div>
            <div className="tags"><h2>TAGS:</h2><a className="first-link" href="/"><u>Organic farming</u></a><a href="/"><u>Organic farming advantages</u></a><a href="/"><u>Organic farming and its benefit</u></a><a href="/"><u>Organic farming definition</u></a>
            </div>

            <div className="blogPost">
                <div className="Fblog"><img src={img2} alt="tea-image" style={{width:"100%", height:"100%"}}/></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1>
                        Is a Healthy Lifestyle your Priority? Let us talk about Abubaba Organic
                        </h1>
                        <p className="likes-para"><span className="likes"><i class="fal fa-eye" ></i> 403 views </span> <span className="likes"><i class="far fa-thumbs-up"></i> 403 likes</span>  <span className="likes"><i class="far fa-comment-alt"></i> 403 comments</span></p>
                        <p className="material">Life is a beautiful journey and as humans it is important for us that in order to live it to the fullest, we should make sure that we do it in the best of health.</p>
                        {/* <div className="readmorebtn"><Button buttonStyle='btn--round-whitebor'>Read More > </Button></div> */}
                        <Link to="/Blog_read/Blog1"><button style={{border:"1px solid white", marginBottom:"5%"}} className="shopNowbtn" type="submit">Read More ></button></Link>
                    </div>
                </div>
            </div>
            <div className="tags"><h2>TAGS:</h2><a className="first-link" href="/"><u>Organic farming</u></a><a href="/"><u>Organic farming advantages</u></a><a href="/"><u>Organic farming and its benefit</u></a><a href="/"><u>Organic farming definition</u></a>
            </div>

            <div className="blogPost">
                <div className="Fblog"><img src={img3} alt="tea-image" style={{width:"100%", height:"100%"}}/></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1>
                        Why our Lakadong Turmeric is the best Immunity booster for you?
                        </h1>
                        <p className="likes-para"><span className="likes"><i class="fal fa-eye" ></i> 403 views </span> <span className="likes"><i class="far fa-thumbs-up"></i> 403 likes</span>  <span className="likes"><i class="far fa-comment-alt"></i> 403 comments</span></p>
                        <p className="material">Touted as one of the healthiest medicinal spices of India, Turmeric is known for its numerous benefits to the human body since ancient times. </p>
                        {/* <div className="readmorebtn"><Button buttonStyle='btn--round-whitebor'>Read More > </Button></div> */}
                        <Link to="/Blog_read/Blog1"><button style={{border:"1px solid white", marginBottom:"5%"}} className="shopNowbtn" type="submit">Read More ></button></Link>
                    </div>
                </div>
            </div>
            <div className="tags"><h2>TAGS:</h2><a className="first-link" href="/"><u>Organic farming</u></a><a href="/"><u>Organic farming advantages</u></a><a href="/"><u>Organic farming and its benefit</u></a><a href="/"><u>Organic farming definition</u></a>
            </div>

            <div className="blogPost">
                <div className="Fblog"><img src={img4} alt="tea-image" style={{width:"100%", height:"100%"}}/></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1>
                        What makes the Kashmiri Saffron an Exquisite yet Nutritional Spice?
                        </h1>
                        <p className="likes-para"><span className="likes"><i class="fal fa-eye" ></i> 403 views </span> <span className="likes"><i class="far fa-thumbs-up"></i> 403 likes</span>  <span className="likes"><i class="far fa-comment-alt"></i> 403 comments</span></p>
                        <p className="material">Known locally as ‘Zafran’, the Abubaba Organic Kashmiri Saffron is the one of the purest in its origin and grown in one of the handful of regions of the country by farmers in the high-altitude regions of the Himalayas.</p>
                        {/* <div className="readmorebtn"><Button buttonStyle='btn--round-whitebor'>Read More > </Button></div> */}
                        <Link to="/Blog_read/Blog1"><button style={{border:"1px solid white", marginBottom:"5%"}} className="shopNowbtn" type="submit">Read More ></button></Link>
                    </div>
                </div>
            </div>
            <div className="tags"><h2>TAGS:</h2><a className="first-link" href="/"><u>Organic farming</u></a><a href="/"><u>Organic farming advantages</u></a><a href="/"><u>Organic farming and its benefit</u></a><a href="/"><u>Organic farming definition</u></a>
            </div>

            <div className="blogPost">
                <div className="Fblog"><img src={img5} alt="tea-image" style={{width:"100%", height:"100%"}}/></div>
                <div className="Fblogmatter">
                    <div className="Blogmatter">
                        <h1>
                        Why to choose Abubaba Organic spices over Regular spices?
                        </h1>
                        <p className="likes-para"><span className="likes"><i class="fal fa-eye" ></i> 403 views </span> <span className="likes"><i class="far fa-thumbs-up"></i> 403 likes</span>  <span className="likes"><i class="far fa-comment-alt"></i> 403 comments</span></p>
                        <p className="material">As consumers are becoming more aware of what they eat in their daily routine, it has become our goal to provide healthy alternatives to their basic cooking essentials that not only are much better in taste and Color but are even more nutritious with every spoon.</p>
                        {/* <div className="readmorebtn"><Button buttonStyle='btn--round-whitebor'>Read More > </Button></div> */}
                        <Link to="/Blog_read/Blog1"><button style={{border:"1px solid white", marginBottom:"5%"}} className="shopNowbtn" type="submit">Read More ></button></Link>
                    </div>
                </div>
            </div>
            <div className="tags"><h2>TAGS:</h2><a className="first-link" href="/"><u>Organic farming</u></a><a href="/"><u>Organic farming advantages</u></a><a href="/"><u>Organic farming and its benefit</u></a><a href="/"><u>Organic farming definition</u></a>
            </div>

          </div>
        </>
    );
}