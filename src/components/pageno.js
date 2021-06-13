import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

class Free extends Component{
    render(){
        return(
            <>
               <div className="free-order">
                <p className="simple-line">Free Delivery for orders above ₹ 499</p>
               </div>
            </>
        );
    }
}

export default Free;