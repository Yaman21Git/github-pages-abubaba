import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import HomeBlog from '../homeBlog'
import AbubabaOrg from '../AbubabaOrg';
import Trending from '../Trending'
//import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <div className="homeFacts">
        <h1>It Matters</h1>
         <div className="fact1"><h2>ORIGIN OF PRODUCT</h2><button style={{borderColor:"white"}}>Read More ˅</button></div>
         <div className="fact2"><h2>CERTIFIED ORGANIC</h2><button style={{borderColor:"white"}}>Read More ˅</button></div>
         <div className="fact3"><h2>ARTISANAL PROCESS</h2><button style={{borderColor:"white"}}>Read More ˅</button></div>
         <div className="fact4"><h2>RESLUT MATTERS</h2><button style={{borderColor:"white"}}>Read More ˅</button></div>
      </div>
      <Cards />
      <AbubabaOrg/>
      <Trending/>
      <h1>Latest Blogs</h1>
      <HomeBlog/>
      <div className="home-certification">
        <h1>Certification</h1>
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="img4"></div>
        <div class="img5"></div>
      </div>
      <div className="home-subscribe">
       <div className="pickles"></div>
       <div className="subscribe">
         <h1>ABUBABA</h1>
         <h2>ORGANIC</h2>
         <hr></hr>
         <h1>SUBSCRIBE</h1>
         <p>Sign in for the latest updates and offers on our products.</p>
         <form>
           <input className="email" type="text" placeholder="enter email address" ></input>
           <input className="submit" type="submit" placeholder="SUBMIT"></input>
         </form>
       </div>
      </div>
    </>
  );
}

export default Home;