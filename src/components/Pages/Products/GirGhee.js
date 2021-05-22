import React from 'react'
import '../../../App.css'
import './Products.css'
import {Link} from 'react-router-dom';
import imgstar from '../../../images2/4 start.png'


import img0 from '../../../images2/187 ghee-gir.jpg'
import img1 from '../../../images2/01 1.png'
import img2 from '../../../images2/55 a gir.png'
import img3 from '../../../images2/55 b gir.png'
import Home from '../Home'

const index0=[0];
const index1=[1,2,3];
const ben=[0,1,2,3,4,5,6,7,8];
const name='Organic Gir Ghee';
const price='₹ 00.00';
const description='Obtained from a special breed of Gir Cows from our exclusive organic certified land, the Gir Cow Ghee is made with a superior quality A-2 milk completely hand-churned to provide 100 times more nutritious Ghee.';
const ingredients=[' Also referred as Desi Ghee with high nutrition', ' 100% Chemical free'];
const benefits=[
      'Rich source of fat-soluble vitamins to facilitate the nutrient absorption from food we consumer',
      'Rich in short chain fatty acids especially Omega 6 that helps in burning fat',
      'Contains A2 protein which is considered the best for body',
      'Rich in Vitamin A,D,E,K, and K2 which helps in building body hormones',
      'Made with Bilona method which helps to alleviate joint pain',
      'Helps in lowering bad cholesterol level and maintaining a heathy balance',
      'Acts as an excellent moisturizer and massage oil for the skin and helps in tissue rejuvenation',
      'Most stable cooking fat',
      'Effective digestion and elimination'];
const reviews=[
               {quality:'Really Good Quality',
               stars:'★★★★',
               username:'Roshni Chauhan ',
               date:'13th May 2021',
               review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra laoreet nulla interdum enim. Feugiat lectus suspendisse sit lectus sed nulla a.'
               }
            ];

export default function GirGhee(){
    return (
             <>
             <div>
             <div className="pdtImages">
                 <div className="images">
                   <img className="full" src={img0}/>
  
                   <img src={img1} className="small"/>
                   <img className="small" src={img2}/>
                   <img className="small" src={img3}/>
                 </div>
                 <div className="pdtMatter">
                   <h1>{name}</h1>
                   <h2>{price}</h2>
                   <Link to="/signup"><button className="spnbtn1">Add to Cart +</button></Link>
                   <p><span><button className="wishlist"><i class="far fa-heart"></i> Wishlist</button></span>
                   <span><button className="wishlist"><i class="fas fa-share-alt"></i> Share</button></span></p>
                 </div>
             </div>
             <div className="productDes">
                    <h2>
                        Product Description
                    </h2>
                    <hr></hr>
                    <p>{description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[1]}</li>
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                        {ben.map(i => {
                            return <li>{benefits[i]}</li>
                            })}
                    </ul>
             </div>
             <div className="reviews">
              <div className="review-container">
               <h2>Customers Reviews</h2>
               <span className="span1"><img src={imgstar}/></span><span className="span2">Based on 10 reviews.</span>
               <Link to="/Products/GirGhee"><span className="btn"><button className="spnbtn">Write a Review.</button></span></Link>
               <ul>
               {index0.map(i => {
                 return(<div>
                     <li className="remBullet">

                     <span className="span0">{reviews[i].quality}</span>
                     <span className="span1"><img src={imgstar}/></span>
                     <p className="p1">{reviews[i].username} {reviews[i].date}</p>
                     <p className="p2">{reviews[i].review}</p>
                    
                    </li>
                    <li className="remBullet">

                    <span className="span0">{reviews[i].quality}</span>
                    <span className="span1"><img src={imgstar}/></span>
                    <p className="p1">{reviews[i].username} {reviews[i].date}</p>
                    <p className="p2">{reviews[i].review}</p>
                   
                   </li>
                   <li className="remBullet">

                   <span className="span0">{reviews[i].quality}</span>
                   <span className="span1"><img src={imgstar}/></span>
                   <p className="p1">{reviews[i].username} {reviews[i].date}</p>
                   <p className="p2">{reviews[i].review}</p>
                  
                  </li>
                  </div>
                    );
                })}
               </ul>
               <h3 className="marginBtm"><a className="viewall" href="/Products/GirGhee">View all reviews</a></h3>
              </div>
             </div>
             <div className="peopleAlso">
               <h2>People has also Purchased</h2>
             </div>
             </div>
             </>
        );
}