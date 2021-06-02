import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link, Redirect} from 'react-router-dom';
import { getUser, load } from './product';
import { isAuthenticated, signout } from './auth';

class Cart extends Component {
   constructor(){
      super()
      this.state = {
          user: "",
          products: "",
          redirect: "",
      }
   }

   componentDidMount = () => {
      if(!isAuthenticated()){
         this.setState({
            redirect: true
         })
         return;
      }
      if(isAuthenticated){
         const userId = isAuthenticated().user._id;
         var {products} = this.state
         
         getUser(userId)
         .then(data => {
            if(data.error)
                  console.log(data.error)
            else{
                  this.setState({
                     user: data
                  })
                  products = new Array;
                  data.cart.map((item,i) => {
                     load(item.productId)
                     .then(result => {
                        products.push(result);
                        this.setState({products: products})
                     })
                     
               })
            }
         });
      }
   }
   
   handleClick = () => {
      signout( () => this.setState({ redirect: true}))
      .then(result => alert("You are successfully logged out."))
   }
   
   render() {
      const {user, products, redirect} = this.state
      
      if(!isAuthenticated() ||  redirect)
         return <Redirect to='/signin'></Redirect>

      return (
         <>
          <div className="yourCart">
               <h1>Your Cart</h1>
               <table className="table">
                     <thead>
                        <tr>
                           <th className="product">Product</th>
                           <th className="price">Price</th>
                           <th className="price">Quantity</th>
                           <th className="total">Subtotal</th>
                        </tr>
                     </thead>
                     <tbody>
                        { products && products.map((item, i) => (
                              <tr key={i} >
                                 <th className="product1"><img className="smallImg" src={item.photos[0]}/> <p>{item.name}</p> </th>
                                 <td className="price1">00.00</td>
                                 <td className="price1">{user.cart[i].quantity}</td>
                                 <td className="total1">00.00</td>
                              </tr>
                        ))}
                     </tbody>
                  </table>
               <div className="user-info">
                  <button className="signout" onClick={this.handleClick}>Sign Out</button>
                  <p><i class="fa fa-user" aria-hidden="true"></i> signed in as:</p>
                  <form className="checkout-form">
                     <h3>This order belongs to</h3>
                     <input className="info" type="text" name="name" placeholder="Your Name*"></input>
                     <input className="info" type="text" name="number" placeholder="Contact Number*"></input>
                     <textarea className="info-address" placeholder="Address*"></textarea>
                     <Link to="/cart/verify"><button className="checkoutbtn">Check-Out -></button></Link>
                  </form>
               </div>
          </div>

          {/* <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
               <button onClick={this.closeModal}>
               Close
               </button>
            </Modal.Footer>
          </Modal> */}
         </>
      );
   }
}

export default Cart;