import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link, Redirect} from 'react-router-dom';
import { getUser, load } from './product';
import { isAuthenticated, signout, updateUser } from './auth';
import { checkOut, verifyPayment } from './paymentApi';
import Verify from './Verify.js'

class Cart extends Component {
   constructor(){
      super()
      this.state = {
         cart: "",
         user: "",
         products: [],
         redirect: "",
         total: 1,
         orderId: "",
         name: "",
         phone: "",
         address: "",
         redirectToVerify: false,
         error: ""
      }
   }

   componentDidMount = () => {
      var {products} = this.state
      var array = JSON.parse(localStorage.getItem("cart")); 
      var total = 0;
      array.map((item,i) => {
         load(item.id)
         .then(result => {
            products.push(result);
            total += item.quantity * result.price;
            this.setState({
               products: products,
               total: total
            })
         })
      })
      this.setState({
         cart: array
      })
   }
   
   handleClick = () => {
      signout( () => this.setState({ redirect: true}))
      .then(result => alert("You are successfully logged out."))
   }

   isValid = () => {
      const { name, phone, address } = this.state
      if (name === "") {
          this.setState({
              error: "Name is required",
              loading: false
          })
          return false;
      }

      if (phone === "") {
         this.setState({
            error: "Phone Number is required",
            loading: false
         })
         return false;
      }

     if (address === "") {
         this.setState({
            error: "Address is required",
            loading: false
         })
         return false;
      }
      return true;
   }

   checkoutHandle = (e) => {
      e.preventDefault();
      if(!isAuthenticated()){
         alert("Please Sign In.")
         this.setState({
            redirect: true
         })
         return;
      }

      if(!this.isValid()){
         return
      }


      const {total, phone, name, address} = this.state
      const params = {
         amount: 1 * 100,
         currency: "INR",
         receipt: "abubaba#1",
         payment_capture: "1" 
      }
      checkOut(params)
      .then(result => {
         console.log(result);
         this.setState({orderId: result.sub.id});

         const userId = isAuthenticated().user._id;
         const user = {
            name: name,
            phone: phone,
            address: address
         }
         updateUser(user, userId)
         .then(result => {
            console.log(result);

            const details = {
               name: result.name,
               phone: result.phone, 
               address: result.address,
               email: result.email
            }
            localStorage.setItem("user", JSON.stringify(details));
            this.setState({
               redirectToVerify: true
            })
         })
      });
   }
   
   render() {
      const {cart, products, redirect, name, phone, address, redirectToVerify, error, orderId, total} = this.state
      
      if(error)
         alert(error);
      if(redirect)
         return <Redirect to='/signin'></Redirect>
      if(redirectToVerify)
         return <Verify orderId={orderId} amount={total}/>
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
                                 <td className="price1">{cart[i].quantity}</td>
                                 <td className="total1">00.00</td>
                              </tr>
                        ))}
                     </tbody>
                  </table>
               <div className="user-info">
                  { isAuthenticated().user && ( <div> <button className="signout" onClick={this.handleClick}>Sign Out</button>
                  <p><i class="fa fa-user" aria-hidden="true"></i> signed in as: {isAuthenticated().user.name}</p> </div>)}
                  <form className="checkout-form">
                     <h3>This order belongs to</h3>
                     <input className="info" type="text" name="name" value={name} placeholder="Your Name*"  onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <input className="info" type="text" name="phone" value={phone} placeholder="Contact Number*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <textarea className="info-address" name="address" value={address} placeholder="Address*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></textarea>
                     <button className="checkoutbtn"  onClick={ event => this.checkoutHandle(event)}> Check Out -{'>'} </button>
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
