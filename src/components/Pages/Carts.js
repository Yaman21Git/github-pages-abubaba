import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import { load } from './product';
import { isAuthenticated, signout, userDetails } from './auth';
import { checkOut } from './paymentApi';
import Verify from './Verify.js'

class Cart extends Component {
   constructor(){
      super()
      this.state = {
         cart: [],
         products: [],
         total: 0,
         orderId: "",
         name: userDetails() ? userDetails().name : "",
         phone: userDetails() ? userDetails().phone : "",
         address: userDetails() ? userDetails().address : "",
         email: userDetails() ? userDetails().email : "",
         redirectToVerify: false,
         error: "",
         delivery: ""
      }
   }

   componentDidMount = () => {
      var {products} = this.state
      var array = JSON.parse(localStorage.getItem("cart"));
      if(!array)
         return;
      var delivery = 0;
      var total = 0;
      var sz = array.length
      products = new Array(sz)
      array.map((item,i) => {
         load(item.id)
         .then(result => {
            products[i] = result;
            total += item.quantity * result.price;
            if(i == sz-1){
               if(total >= 499){
                  delivery = 0;
               }
               else{
                  delivery = 40;
                  total = total + delivery;
               }
            }
            this.setState({
               products: products,
               total: total,
               delivery: delivery
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
      const { name, phone, email, address, cart } = this.state
      if (name === "" ) {
          this.setState({
              error: "Name is required"
          })
          return false;
      }

      if (phone === "") {
         this.setState({
            error: "Phone Number is required"
         })
         return false;
      }

     if (address === "") {
         this.setState({
            error: "Address is required"
         })
         return false;
      }

      if(email === ""){
         this.setState({
            error: "Email is required"
         })
         return false;
      }

      if(! (/[\w._-]+@[\w.-]+\.[a-zA-Z0-9-]{2,4}/.test(email)) ){
         this.setState({
            error: "Email is invalid"
         })
         return false;
      }

      if( phone.length !== 10 ){
         this.setState({
            error: "Phone number is invalid"
         })
         return false;
      }

      if(cart.length == 0){
         this.setState({
            error: "Please add item to your cart"
         })
         return false;
      }

      return true;
   }

   checkoutHandle = (e) => {
      e.preventDefault();
      if(!this.isValid()){
         return
      }
      const {total, phone, name, address, email} = this.state
      const params = {
         amount: total * 100,
         currency: "INR",
         receipt: "abubaba#1",
         payment_capture: "1" 
      }
      checkOut(params)
      .then(result => {
         console.log(result);
         this.setState({orderId: result.sub.id});

         const user = {
            name: name,
            email: email,
            phone: phone,
            address: address
         }
         console.log(user);
         localStorage.setItem("user", JSON.stringify(user));
         this.setState({
            redirectToVerify: true
         })
      })
   }
   
   render() {
      const {cart, products, name, email, phone, address, redirectToVerify, error, orderId, total, delivery} = this.state
      
      if(redirectToVerify)
         return <Verify orderId={orderId} amount={total} cart={cart}/>
      
      return (
         <>
          <div className="yourCart">
               <h1>Your Cart</h1>
               {cart.length > 0 ? (
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
                                 <td className="price1">₹ {item.price}.00</td>
                                 <td className="price1">{cart[i].quantity}</td>
                                 <td className="total1">₹ {item.price * cart[i].quantity}.00</td>
                              </tr>
                        ))}
                     </tbody>
               </table>) : (<div  style={{textAlign: "center",fontFamily:"'Monserrat',sans-serif",fontSize:"3vw"}}>No items added to cart yet.</div>) }
               <div className="user-info">
                  { isAuthenticated().user && ( <> <button className="signout" onClick={this.handleClick}>Sign Out</button>
                  <p className="username"><i class="fa fa-user" aria-hidden="true"></i> Signed in as: {isAuthenticated().user.name}</p> </> )}
                  <form className="checkout-form">
                     <h3>This order belongs to</h3>
                     { error && <div><h3>***{error}***</h3> <br/> </div>}
                     <input className="info" type="text" name="name" value={name} placeholder="Your Name*"  onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <input className="info" type="email" name="email" value={email} placeholder="Email Address*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <input className="info" type="number" name="phone" value={phone} placeholder="Contact Number*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <textarea className="info-address" name="address" value={address} placeholder="Address*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></textarea>
                     <p className="total-amount">
                        {cart.length > 0 && <p>Total Amount: ₹ {total}.00</p>} 
                        {cart.length > 0 && <p>Delivery Charges: ₹ {delivery}.00 </p>} <br/> 
                        <button className="checkoutbtn"  onClick={ event => this.checkoutHandle(event)}> Check Out -{'>'} </button>
                     </p>
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
