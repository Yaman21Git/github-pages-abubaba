import React from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link} from 'react-router-dom';

export default function Cart(){
    return (
       <>
        <div className="yourCart">
           <h1>Your Cart</h1>
        </div>
       </>
    );
}