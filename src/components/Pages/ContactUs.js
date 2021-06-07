import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import { sendQuery } from './product';

export default function AboutUs(){
    return (
       <>
         <div className="aboutus-container">
           <div className="aboutus-header" >
             <h1>About Us</h1>
           </div>
           <div className="mobileView">
           <div className="weRbest">
              <h1>Why we are the Best</h1>
              <p>We believe in using ancient methods in order to preserve the product with its utmost nutritional value.</p>
              
              <p>The practice that makes us different, is the elimination of the advanced industrial mechanics in our organic products and by going back to our roots and using the traditional handcrafted methods to achieve the finest quality food.</p>
              <p>Our natural edible Oils are extracted from the traditional Bull-driven Kohlu method as opposed to the Cold-pressed method, which helps in retaining maximum health benefits. And  just like the our Oil, our Ghee and Spices are prepared by our artisans with the traditional Hand-churned Bilona method and Hand-ground method that not only are more nutritious but also reflects the immense love and devotion from our artisans.</p>
           </div>
           <div className="aboutus-img">
             <div className="aboutusImg" style={{height:"44vw"}} >
             </div>
           </div>

           <div className="weRbest">
              <h1>What Drives Us ?</h1>
              <p>It is the love for our mother nature and the pristine lands it bestows upon us that got us motivated to be part of this journey of natural living and pure organic practices. And it is the love for food that brings us closer to the fact that the key to a delectable meal is the right ingredients that bring out the best of its flavours. Our premium quality handcrafted organic products retain the best of their natural flavours and nutrition that they inherit from the beautiful soils they originate from.</p>
              <p>At Abubaba Organic, we are dedicated to improving and enhancing the food we eat by offering completely natural and organic products that offer traditional nourishments leading to long-term benefits towards a healthy and disease-free lifestyle.</p>
              <p>The distinct Lakadong Turmeric and the Kashmiri Red Chili are only a few from our wide range of organic products that embody the power of natural food and promise positive changes in the lifestyle, health, and well-being of our customers.</p>
              <p>Join us in our journey towards a wholesome lifestyle.</p>
          </div>
          <div className="aboutusFacts">
               <div className="Row1">
                 <div className="row1">
                   <div class="indiaImg"></div>
                   <h2 className="h2">Origin of the Product</h2>
                   <hr className="hrclass"></hr>
                   <p className="pClass">Our focus is not to choose the product but to let the product choose us. We believe in mother nature and it’s idea of deciding the optimal origin of the product which leads us to the best quality.</p>
                   
                 </div>
                 <div className="row2">
                 <div class="indiaImg"></div>
                   <h2 className="h2">Certified Organic</h2>
                   <hr className="hrclass"></hr>
                   <p className="pClass">We are a certified organic brand and our philosophy is to work and produce the optimal quality and high standard products for our customer. Our products are all natural and free from any artificial ingredients.
                   </p>
                 </div>
               </div>
               <div className="Row2">
                 <div className="row1">
                 <div class="indiaImg"></div>
                   <h2 className="h2">Artisanal Process</h2>
                   <hr className="hrclass"></hr>
                   <p className="pClass">All our products are handmade and handcrafted with love by our food artisans. With close attention to personal touch, we strive to retain the traditional methods of production to achieve the best quality.
                   </p>
                 </div>
                <div className="row2">
                <div class="indiaImg"></div>
                   <h2 className="h2">Origin of the Product</h2>
                   <hr className="hrclass"></hr>
                   <p className="pClass">The benefits that the organic food provides are conclusive and we love to see the satisfaction reflecting in the smiles of our customers when they see the difference. In the end, you matter to us.
                   </p>
                </div>
            </div>
          </div>  
            <h1 className="healthhead">Health Benefits</h1>
            <div className="healthFacts-container">
              <div className="pureNatural">
              </div>
              <div className="health">
              <h1>Prevents Heart Attacks</h1> 
              <p>Being one of the healthiest types of fat around, organic food gives you the opportunity to choose your fats wisely.</p>
              <hr></hr>
              <h1>Reduces Cholesterol Levels</h1>
              <p>The health benefits of Green vegetables produced organically include lower cholesterol levels in the your blood.</p>
              <hr></hr>
              <h1>Improves Your Memory</h1>
              <p>Multiple studies have shown that organic antioxidants help in the reversal of disease-related memory deficits in the body.</p>
              <hr></hr>
              <h1>Helps Digestion</h1>
              <p>Even while being high in calories, organic milk has been Milk has been proven to help reduce levels of obesity.</p>
              <hr></hr>
              <h1>Helps Fight Cancer</h1>
              <p>Research shows that a higher frequency of Organic food consumption can decrease the risk of breast cancer and its recurrence.</p>
              <hr></hr>
              <h1>Prevents Blood Clotting</h1>
              <p>Olive oil is a proven agent in the reduction of risks of heart attacks and strokes while also preventing harmful blood clots in people with high cholesterol.</p>
              </div>
            </div>
         </div>
         </div>
       </>
    );
}
