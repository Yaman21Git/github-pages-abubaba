import React, { Component } from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

class Verify extends Component{
    render(){
        return(
          <>
            <div className="verify-info">
                <h1>Verify your details</h1>
                <Link to="/cart"> Go Back</Link>
                <div className="details">
                   <p>Your Name:</p>
                   <p>Your Contact:</p>
                   <p>Your Address:</p>
                   <p>
                       <ol>
                           <li></li>
                       </ol>
                    </p>

                    <Link><button>Check-Out</button></Link>
                </div>
            </div>
          </>
        );
    }
}

export default Verify;