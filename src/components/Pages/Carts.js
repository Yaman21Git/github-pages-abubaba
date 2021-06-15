import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import { load } from './product';
import { isAuthenticated, signout, userDetails } from './auth';
import { checkOut } from './paymentApi';
import Verify from './Verify.js'
import ThreeDotsLoader from '../ThreeDotsLoader'
import { Redirect } from 'react-router-dom';
import CryptoJS from 'crypto-js';
const kftss = "AHDGHGUDIGUIEJBDYFVYSVFUyUGAIUGWUIGH27GBAHG87YW-SDIYW5E7TFIG8671892109UEY89QU2"


class Cart extends Component {
   constructor(){
      super()
      this.state = {
         orderId: "",
         t: "",
         d: "",
         c: "",
         p:  "",
         name: userDetails() ? userDetails().name : "",
         phone: userDetails() ? userDetails().phone : "",
         address: userDetails() ? userDetails().address : "",
         email: userDetails() ? userDetails().email : "",
         redirectToVerify: false,
         error: "",
         show: false,
         version: 0
      }
   }

   componentDidMount = () => {

      var cnt = 0;
      var total = 0;
      var delivery = 0;
      var array = JSON.parse(localStorage.getItem("cart"));
      
      if(!array || array.length == 0){
         var temp  = [];
         var cipherTotal = CryptoJS.AES.encrypt(total.toString(), kftss).toString();
         var cipherDelivery = CryptoJS.AES.encrypt(delivery.toString(), kftss).toString();      
         var cipherCart = CryptoJS.AES.encrypt(JSON.stringify(temp), kftss).toString();
         this.setState({
            show: true,
            t: cipherTotal,
            d: cipherDelivery,
            c: cipherCart,
            p: cipherCart
         })
         return;
      }
      
      
      var sz = array.length
      var products = new Array(sz)
      
      array.map((item,i) => {
         load(item.id)
         .then(result => {
            
            cnt++;
            products[i] = result;
            total += item.quantity * result.price;
            delivery = (total <= 499 ? 85 : 0);
            
            if(cnt == sz){
               var cipherTotal = CryptoJS.AES.encrypt(total.toString(), kftss).toString();
               var cipherDelivery = CryptoJS.AES.encrypt(delivery.toString(), kftss).toString();
               var cipherCart = CryptoJS.AES.encrypt(JSON.stringify(array), kftss).toString();
               var cipherProduct = CryptoJS.AES.encrypt(JSON.stringify(products), kftss).toString();
               
               this.setState({
                  show: true,
                  t: cipherTotal,
                  d: cipherDelivery,
                  c: cipherCart,
                  p: cipherProduct
               })
            }
         })
      })
   }

   handleClick = () => {
      signout( () => this.setState({ redirect: true}))
      .then(result => alert("You are successfully logged out."))
   }

   isValid = () => {
      const { name, phone, email, address, c } = this.state
      var bytes  = CryptoJS.AES.decrypt(c, kftss);
      var cart = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

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
      const {phone, name, address, email, t, d} = this.state
      var byt = CryptoJS.AES.decrypt(t, kftss);
      var byd = CryptoJS.AES.decrypt(d, kftss);

      var total = parseInt(byt.toString(CryptoJS.enc.Utf8));
      var delivery = parseInt(byd.toString(CryptoJS.enc.Utf8));

      const params = {
         amount: (total + delivery) * 100,
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
         
         localStorage.setItem("user", JSON.stringify(user));
         this.setState({
            redirectToVerify: true
         })
      })
   }
   
   incrementValue = (i, price) => {
      const {t, d, c} = this.state
      
      var byt = CryptoJS.AES.decrypt(t, kftss);
      var byd = CryptoJS.AES.decrypt(d, kftss);
      var byc  = CryptoJS.AES.decrypt(c, kftss);
      
      var total = parseInt(byt.toString(CryptoJS.enc.Utf8));
      var delivery = parseInt(byd.toString(CryptoJS.enc.Utf8));
      var cart = JSON.parse(byc.toString(CryptoJS.enc.Utf8));

      const { quantity } = cart[i];
      if(quantity < 10){
         cart[i].quantity += 1;
         total = parseInt(total) + parseInt(price);
         delivery = (total <= 499 ? 85 : 0);
         localStorage.setItem("cart", JSON.stringify(cart));
      }

      var cipherTotal = CryptoJS.AES.encrypt(total.toString(), kftss).toString();
      var cipherDelivery = CryptoJS.AES.encrypt(delivery.toString(), kftss).toString();
      var cipherCart = CryptoJS.AES.encrypt(JSON.stringify(cart), kftss).toString();
               
      this.setState({
         t: cipherTotal,
         d: cipherDelivery,
         c: cipherCart
      })
   }

   decrementValue = (i, price) => {
      const {t, d, c} = this.state
      
      var byt = CryptoJS.AES.decrypt(t, kftss);
      var byd = CryptoJS.AES.decrypt(d, kftss);
      var byc  = CryptoJS.AES.decrypt(c, kftss);
      
      var total = parseInt(byt.toString(CryptoJS.enc.Utf8));
      var delivery = parseInt(byd.toString(CryptoJS.enc.Utf8));
      var cart = JSON.parse(byc.toString(CryptoJS.enc.Utf8));

      const { quantity } = cart[i];

      if(quantity > 1){
         cart[i].quantity = quantity - 1;
         total = parseInt(total) - parseInt(price);
         delivery = (total <= 499 ? 85 : 0);
         localStorage.setItem("cart", JSON.stringify(cart));
      }

      var cipherTotal = CryptoJS.AES.encrypt(total.toString(), kftss).toString();
      var cipherDelivery = CryptoJS.AES.encrypt(delivery.toString(), kftss).toString();
      var cipherCart = CryptoJS.AES.encrypt(JSON.stringify(cart), kftss).toString();
               
      this.setState({
         t: cipherTotal,
         d: cipherDelivery,
         c: cipherCart
      })
   }

   removeItem = (i, price) => {
      const {t, d, c, p} = this.state
      
      var byt = CryptoJS.AES.decrypt(t, kftss);
      var byd = CryptoJS.AES.decrypt(d, kftss);
      var byc  = CryptoJS.AES.decrypt(c, kftss);
      var byp  = CryptoJS.AES.decrypt(p, kftss);

      var total = parseInt(byt.toString(CryptoJS.enc.Utf8));
      var delivery = parseInt(byd.toString(CryptoJS.enc.Utf8));
      var cart = JSON.parse(byc.toString(CryptoJS.enc.Utf8));
      var products = JSON.parse(byp.toString(CryptoJS.enc.Utf8));

      const { quantity } = cart[i];

      total = parseInt(total) - quantity * parseInt(price);
      delivery = (total <= 499 ? 85 : 0);
      cart.splice(i, 1);
      products.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));

      var cipherTotal = CryptoJS.AES.encrypt(total.toString(), kftss).toString();
      var cipherDelivery = CryptoJS.AES.encrypt(delivery.toString(), kftss).toString();
      var cipherCart = CryptoJS.AES.encrypt(JSON.stringify(cart), kftss).toString();
      var cipherProduct = CryptoJS.AES.encrypt(JSON.stringify(products), kftss).toString();
      
      this.setState({
         t: cipherTotal,
         d: cipherDelivery,
         c: cipherCart,
         p: cipherProduct
      })
   }
   
   handleInput = (event) => {
      const {quantity} = this.state;
   }
  
   render() {
      const {t, d, c, p, show, name, email, phone, address, redirectToVerify, error, orderId} = this.state

      var byt, byd, byc, byp;
      var total, delivery, cart, products;
      if(show){
         byt = CryptoJS.AES.decrypt(t, kftss);
         byd = CryptoJS.AES.decrypt(d, kftss);
         byc  = CryptoJS.AES.decrypt(c, kftss);
         byp  = CryptoJS.AES.decrypt(p, kftss);

         total = parseInt(byt.toString(CryptoJS.enc.Utf8));
         delivery = parseInt(byd.toString(CryptoJS.enc.Utf8));
         cart = JSON.parse(byc.toString(CryptoJS.enc.Utf8));
         products = JSON.parse(byp.toString(CryptoJS.enc.Utf8));
      }

      if(redirectToVerify)
         return <Redirect to={{
            pathname: "/cart/verify",
            state: { orderId: orderId,
                     amount:  CryptoJS.AES.encrypt((total+delivery).toString(), kftss).toString(), 
                     cart: CryptoJS.AES.encrypt(JSON.stringify(cart), kftss).toString()
                  }
            }} />
      
      return (
         <>
          <div className="yourCart">
               <h1>Your Cart</h1>
               { show ? ( cart.length ? (
               <table className="table">
                     <thead>
                        <tr>
                           <th className="product">Product</th>
                           <th className="price">Price</th>
                           <th className="price">Qty</th>
                           <th className="total">Subtotal</th>
                        </tr>
                     </thead>
                     <tbody>
                        { products && products.map((item, i) => (
                              <tr key={i} >
                                 <th className="product1"><img className="smallImg" src={item.photos[0]}/> <p>{item.name}</p> <button className="remove-btn" onClick={() => this.removeItem(i, item.price)}>Remove</button> </th>
                                 <td className="price1">₹ {item.price}.00</td>
                                 <td className="price1">
                                    <button onClick={() => this.decrementValue(i, item.price)} className="abc" > - </button>
                                    <input type="text" value={cart[i].quantity} onChange={this.handleInput} size="2" className="number"/>
                                    <button onClick= {() => this.incrementValue(i, item.price)} className="abc1" > + </button>
                                 </td>
                                 <td className="total1">₹ {item.price * cart[i].quantity}.00</td>
                              </tr>
                        ))}
                     </tbody>
               </table>) : (<div  style={{textAlign: "center",fontFamily:"'Monserrat',sans-serif",fontSize:"3vw"}}>No items added to cart yet.</div>) )  : (<ThreeDotsLoader/>) }               
               { show && <div className="user-info">
                  { isAuthenticated().user && ( <> <button className="signout" onClick={this.handleClick}>Sign Out</button>
                  <p className="username"><i class="fa fa-user" aria-hidden="true"></i> Signed in as: {isAuthenticated().user.name}</p> </> )}
                  <form className="checkout-form">
                     <h3>This order belongs to</h3>
                     { error && <div className="error-message"><h3>***{error}***</h3> </div>}
                     <input className="info" type="text" name="name" value={name} placeholder="Your Name*"  onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <input className="info" type="email" name="email" value={email} placeholder="Email Address*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <input className="info" type="number" name="phone" value={phone} placeholder="Contact Number*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></input>
                     <textarea className="info-address" name="address" value={address} placeholder="Address*" onChange = { e => this.setState({[e.target.name] : e.target.value}) }></textarea>
                     <p className="total-amount">
                        {cart.length > 0 && <p>Total Amount: ₹ {total + delivery}.00</p>} 
                        {cart.length > 0 && <p>Delivery Charges: ₹ {delivery}.00 </p>} <br/> 
                        <button className="checkoutbtn"  onClick={ event => this.checkoutHandle(event)}> Check Out -{'>'} </button>
                     </p>
                  </form>
               </div>
               }
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
