import React, { Component } from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import HomeBlog from '../homeBlog'
import AbubabaOrg from '../AbubabaOrg';
import Trending from '../Trending'
import { Link } from 'react-router-dom';
import ClientsItem from '../ClientsItem'
import img0 from '../../images2/Ellipse 1.png'
import img1 from '../../images2/Ellipse 2.png'
import img2 from '../../images2/Ellipse 3.png'
import star from '../../images2/4 start.png'
//import Footer from '../Footer';
import pickles from '../../images2/picklesNew.png'
import { newsletter } from './product';

const index0=[0,1,2];

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
        src:[img0,img1,img2],
        name:['Sharon Grover', 'Shubham Verma', 'Shalini Kaur'],
        // stars:['<i class="fas fa-star"></i>','<i class="fas fa-star"></i>','<i class="fas fa-star"></i>'],
        description:['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget in congue a odio diam tortor feugiat massa. Fringilla tempor eu arcu in ullamcorper aliquam.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget in congue a odio diam tortor feugiat massa. Fringilla tempor eu arcu in ullamcorper aliquam.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eget in congue a odio diam tortor feugiat massa. Fringilla tempor eu arcu in ullamcorper aliquam.'],
        showMessage0:false,
        showMessage1:false,
        showMessage2:false,
        showMessage3:false,
        email: ""
      };
  }
  
  onButtonClickHandler0 = () => {
    this.setState({ showMessage0: !this.state.showMessage0});
  };
  onButtonClickHandler1 = () => {
    this.setState({ showMessage1: !this.state.showMessage1});
  };
  onButtonClickHandler2 = () => {
    this.setState({ showMessage2: !this.state.showMessage2});
  };
  onButtonClickHandler3 = () => {
    this.setState({ showMessage3: !this.state.showMessage3});
  };

  render(){
  return (
    <>
      <HeroSection />
      <div className="homeFact-container">
      <div className="homeFacts">
        <h1 className="it-matters">It Matters</h1>
         <div className="fact1">
           <h2>ORIGIN OF THE PRODUCT</h2>
             <button style={{borderColor:"white", cursor:"pointer"}} onClick={this.onButtonClickHandler0}>Read More ˅</button>
             {this.state.showMessage0 && <p style={{fontFamily:"'Monserrat', sans-serif",fontSize:"0.7vw",width:"80%", marginLeft:"auto",marginRight:"auto"}}>Our focus is not to choose the product but to let the product choose us. We believe in mother nature and it’s idea of deciding the optimal origin of the product which leads us to the best quality.</p>}
        </div>
         <div className="fact2">
           <h2>CERTIFIED ORGANIC</h2>
           <button style={{borderColor:"white", cursor:"pointer"}} onClick={this.onButtonClickHandler1}>Read More ˅</button>
             {this.state.showMessage1 && <p style={{fontFamily:"'Monserrat', sans-serif",fontSize:"0.7vw",width:"80%", marginLeft:"auto",marginRight:"auto"}}>We are a certified organic brand and our philosophy is to work and produce the optimal quality and high standard products for our customer. Our products are all natural and free from any artificial ingredients.</p>}
        </div>
         <div className="fact3">
           <h2>ARTISANAL PROCESS</h2>
           <button style={{borderColor:"white", cursor:"pointer"}} onClick={this.onButtonClickHandler2}>Read More ˅</button>
             {this.state.showMessage2 && <p style={{fontFamily:"'Monserrat', sans-serif",fontSize:"0.7vw",width:"80%", marginLeft:"auto",marginRight:"auto"}}>All our products are handmade and handcrafted with love by our food artisans. With close attention to personal touch, we strive to retain the traditional methods of production to achieve the best quality.</p>}
         </div>
         <div className="fact4">
           <h2>RESULT MATTERS</h2>
           <button style={{borderColor:"white", cursor:"pointer"}} onClick={this.onButtonClickHandler3}>Read More ˅</button>
             {this.state.showMessage3 && <p style={{fontFamily:"'Monserrat', sans-serif",fontSize:"0.7vw",width:"80%", marginLeft:"auto",marginRight:"auto"}}>The benefits that the organic food provides are conclusive and we love to see the satisfaction reflecting in the smiles of our customers when they see the difference. In the end, you matter to us.</p>}
         </div>
      </div></div>
      <Cards />
      <AbubabaOrg/>
      <Trending/>
      <HomeBlog/>
      <div className="clientTest">
          <h1>Our Customer's Love</h1>
          <p>What our Customers say about us?</p>
          {index0.map(i => {
                return <ClientsItem src={this.state.src[i]} name={this.state.name[i]} description={this.state.description[i]}/>
                })}
      </div>
      <div className="home-certification">
        <h1>Certification</h1>
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="img4"></div>
        <div class="img5"></div>
      </div>
      <div className="home-subscribe">
       <div className="pickles"><img src={pickles} alt="pickles" style={{maxWidth:"90%", maxHeight:"80%",marginTop:"10%",marginLeft:"10%"}}/></div>
       <div className="subscribe">
         <div className="logo"></div>
         <h1>SUBSCRIBE</h1>
         <p>Sign in for the latest updates and offers on our products.</p>
         <form>
           <input className="email" type="text" value={this.state.email} placeholder="Enter email address" onChange={event => this.setState({email: event.target.value})}></input>
           <Link to="/"><input className="submit" type="submit" placeholder="SUBMIT" onClick={ () => { const {email} = this.state;   const emailentry = {email : email}; newsletter(emailentry).then(result => alert(result)) } }></input></Link>
         </form>
       </div>
      </div>
    </>
  );
  }
}

export default Home;
