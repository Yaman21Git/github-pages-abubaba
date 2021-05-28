import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link, Redirect} from 'react-router-dom';
import { getUser, load } from './product';
import { isAuthenticated, signout } from './auth';
import './carts.css'


class Cart extends Component {
   constructor(){
      super()
      this.state = {
          user: "",
          products: "",
          redirect: ""
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
               <button className="signout" onClick={this.handleClick}>Sign Out</button>
               <h1>Your Cart</h1>
               <table className="table" style={{width: "100%"}}>
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
                           <tr className="table-item" key={i} >
                              <th className="product"><img className="small" src={item.photos[0]}/> <p style={{marginTop: "7.5%"}}>{item.name}</p> </th>
                              <td className="price">00.00</td>
                              <td className="price">{user.cart[i].quantity}</td>
                              <td className="total">00.00</td>
                           </tr>
                     ))}
                  </tbody>
               </table>
          </div>
         </>
      );
   }
}

export default Cart;
