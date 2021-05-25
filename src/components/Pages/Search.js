import React from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link} from 'react-router-dom';

export default function Search(){
    return (
       <>
        <div className="search-item-container">
            <div className="navbar-hidden">
              <div style={{width:"50%",float:"left",paddingTop:"2%"}}><h1 style={{marginLeft:"8%", textAlign:"left",fontSize:"4vw"}}>Your searched items will appear below:</h1></div>
              <div className="search-btn">
                <input className="main-search" type="text" placeholder="what do you want to search?" name="searched_item"></input>
                <Link to="/search"><button type="button" className="redbtn">SEARCH</button></Link>
              </div>
            </div> 
        </div>
       </>
    );
}