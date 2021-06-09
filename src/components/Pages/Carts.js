import React, { Component } from 'react'
import '../../App.css'
import { Redirect } from 'react-router-dom'
import {userDetails, isAuthenticated} from './auth'
import {addOrder} from './product'
import {verifyPayment} from './paymentApi'
import Razorpay from 'razorpay'

class Verify extends Component{
   constructor(){
      super()
      this.state = {
         orderId: "",
         amount: "",
         cart: "",
         redirectToAccount: false
      }
   }

   componentDidMount = () => {
      this.setState({
         orderId: this.props.orderId,
         amount: this.props.amount,
         cart: this.props.cart
      })
   }


   confirmPayment = (response) => {
      const {cart, amount} = this.state;

      const deatils = {
         razorpay_payment_id: response.razorpay_payment_id,
         razorpay_order_id: response.razorpay_order_id,
         razorpay_signature: response.razorpay_signature
      }
      verifyPayment(deatils)
      .then(result => {
         if(result === "failure")
            alert("Payment Unsuccessful!");
         else{
            const order = {
               orderId: response.razorpay_order_id,
               paymentId: response.razorpay_payment_id,
               products: cart,
               amount: amount,
               email: userDetails().email
            }

            addOrder(order)
            .then(result => {
               alert("Payment Successful! \nPlease check your email for the order details");
               localStorage.setItem("cart", JSON.stringify([]));
               this.setState({
                  redirectToAccount: true
               })
            })
         }
      });
   }

   handlePayment = (e) => {

      var options = {
         "currency": "INR",
         "name": "Abubaba Organic",
         "description": "SBM ENTERPRISE",
         "image": "",
         "order_id": this.state.orderId, 
         "handler": (response) => this.confirmPayment(response),
         "theme": {
            "color": "#3399cc"
         }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
   }

   render(){
      const {amount, redirectToAccount} = this.state;
      if(redirectToAccount)
         return <Redirect to='/services'></Redirect>
      return(
         <div className="verify-info">
            <h1>Verify your details</h1>
            <div className="details">
                  <br/>
                  <p>Your Name: {userDetails().name}</p> <br/>
                  <p>Your Contact: {userDetails().phone}</p> <br/>
                  <p>Your Address: {userDetails().address}</p> <br/>
                  <p>Total Amount: ₹ {amount}.00</p>
                  
                  <button id="rzp-button1" onClick={ (event) => this.handlePayment(event) }>Proceed To Payment</button>
            </div>
         </div>
      );
   }
}

export default Verify;
