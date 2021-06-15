import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../../App.css'
import './Blogs.css'


import imgBack from '../../../images2/pexels.jpg'
import imgGreen from '../../../images2/image 17.jpg'
import imgGreen2 from '../../../images2/image 18.jpg'

export default function Blog2(){
    return (
        <>
          <div className="blogBack">
              <img src={imgBack} alt="blogs"/><div className="centered">Blogs</div>
              <div className="blackhead">What is Organic farming in India | Benefits and Methods</div>
          </div>
          <div className="content">
              <p className="firstp">Organic farming is one the most ancient agriculture method in which the farmer use  ecologically based pest controls and biological fertilizers. The increasing population of the world is the biggest problem today. Another problem is arising with the increasing population, which is the problem of food supply to this population which is increasing day by day. Today, the weather conditions are also not favorable for farming and crops, as before. The farmer is also not capable of crop production.</p>

              <p className="firstp">Farmers have started using chemical fertilizers, poisonous pesticides for the production of their crops, which is harmful to both human health and soil. At the same time, the environment is also getting polluted. To stop all these things If the farmer uses organic methods instead of chemical methods, then these problems can be overcome to a large extent.</p>
              <img src={imgGreen} alt="greenery" className="greenery"/>
              <h1 className="centerhead">What is Organic farming?</h1>
              <p className="secondp">The method of farming in which crops are produced without or with little use of chemical fertilizers and pesticides is called organic farming. Its main purpose is to increase the production of crops along with maintaining soil fertilizer power.</p>
              <p className="secondp">The main objective of organic agriculture is to save the soil fertilizer from being destroyed and to prevent the use of chemical substances in the food we use every day.</p>
              <p className="secondp">Providing such nutrients to crops, which are insoluble in soil and crops and effective on micro-organisms.</p>
              <p className="secondp">Recycling using organic nitrogen and using organic manure and organic materials. Preventing sprinkling of weed, diseases occurring in crops and medicines for destroying the kit, so that it does not harm the health. In organic farming, crops as well as the care of animals, which includes their habitat, their maintenance, their catering, etc., are also taken care of. The most important objective of organic farming is to secure the effect on its environment as well as to protect wild animals and natural life.</p>

              <h1 className="otherhead">Organic farming benefits:</h1>

                <ul>
                    <li>The most important thing in farming is two things, the first farmer second, the land of the farmer and the adoption of organic agriculture, both of them are of great benefit.</li>
                    <li>By adopting organic agriculture, the fertile capacity of the land increases, as well as increasing the irrigation gap for crops.</li>
                    <li>If the farmer does not use chemical fertilizer in farming and uses organic manure, then the cost of planting for his crop is also low.</li>
                    <li>The crop production of the farmer increases, which also gives him more profit.</li>
                    <li>The use of organic manure also improves the quality of the land.</li>
                    <li>With the use of this method, the capacity of water retention in the land increases and the evaporation of water is also lacking.</li>
                    <li>Nowadays our environment is also becoming very polluted and the use of organic methods for farming also benefits our environment greatly.</li>
                </ul>

                <h1 className="otherhead">Benefit for the environment:</h1>

                <p className="secondp">Organic farming</p>
                <p className="secondp">The water level of the land increases, as well as there is a reduction in pollution caused by soil, food, and water in the land by preventing the use of chemical substances.</p>
                <p className="secondp">The use of animal dung and waste to make manure reduces pollution and reduces mosquitoes and other dirt caused by it, which prevents diseases.</p>
                <p className="secondp">If we look at the international market, then there is also a high demand for the substances produced by organic farming.</p>
                <p className="secondp">By doing organic farming, crop production increases, which also increases the income of farmers. In an agricultural country like India, it is very important that farmers use organic methods of farming so that the production of crops is large. The problem of this will be solved as well as the physical level of the farmers will also improve. Most of the land farming in India is based on rainfall and nowadays the rainfall is not getting as per the time, which also makes agriculture The Ulsan | If farmers adopt organic farming, then this problem can also be overcome.</p>
                
                <img src={imgGreen2} alt="green2" className="greenery"/>
                
                <p className="firstp">Organic agriculture is primarily a combination of ecological and modern technical knowledge of farming, along with the use of traditional methods of farming. We can study the methods of organic agriculture in the ago ecology field. In the traditional farming method, farmers can use synthetic pesticides and water. It uses soluble artificial fertilizers, whereas, in organic farming, the farmer opposes the use of natural pesticides and fertilizers. In organic farming methods, farmers mainly use crop rotation, organic manure, organic kit control, and mechanical farming, etc. These methods also require the use of natural environments to increase the production of crops such as nitrogen levels in the soil. To correct this, planting fruits, encouragement of natural insect predators, rotation of crops, etc. are included.</p>
                <p className="firstp">Crop diversity is encouraged in organic agriculture, according to which many crops are produced in one place.</p>
                <p className="firstp">Soil management is an important part of soil management, through its use we can increase the quality of the land. To do this we need to pay attention to soil type and soil characteristics.</p>
                <p className="firstp">Weed management Weed means weed less vegetation that grows spontaneously in the midst of crops or plants and uses the nutrition received by the crops themselves, which are also disposed of in organic agriculture.</p>


                <p className="lastp"><b>TAGS:</b> organic farming, organic farming advantages, organic farming and its benefits, organic farming and organic food, organic farming definition, organic farming in delhi, organic farming in india</p>
                <h3 className="share">Share</h3>
                <span class="shopnow_dot1" style={{marginLeft:"10%",textAlign:"right"}}><Link to="/blogs" style={{textDecoration:"none",color:"black"}}><p>←</p></Link></span>
                <span class="nextpage" style={{marginLeft:"0"}}>——— Previous</span>
                <span class="shopdot_first">
                    <Link to="/Blog_read/Blog1" style={{textDecoration:"none",color:"black"}}>
                    <i class="fab fa-facebook" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-instagram" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-twitter-square" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-pinterest" style={{marginRight:"1.4%"}}></i>
                    <i class="fab fa-snapchat" style={{marginRight:"1.4%"}}></i>
                    </Link>
                </span>
                <span class="nextpage">Next ———</span>
                <span class="shopnow_dot1"><Link to="/blogs" style={{textDecoration:"none",color:"black"}}><p>→</p></Link></span>
          </div>
          <div className="comment-Blog">
             <h2>Leave us a reply</h2>
             <p className="req">Your email address will not be published. Required fields are marked *</p>
             <form className="leaveus-reply">
             <p><input type="text" placeholder="Full Name*" name="name"></input></p>
             <p><input type="email" placeholder="E-mail address*" name="email"></input></p>
             <p><input className="comment" type="text" placeholder="Comment*" name="comment"></input></p>
             <button type="submit" className="post-comment"> <Link to="/Blog_read/Blog1" style={{textDecoration:"none",color:"white"}}>Post Comment</Link></button>
             </form>
          </div>
        </>
    );
}