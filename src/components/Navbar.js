import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {Button} from './button'

function Navbar(){
    const [click, setClick]= useState(false);
    const [button,setButton]=useState(true);

    const handleClick= ()=> setClick(!click);
    const closeMobileMenu= ()=> setClick(false);
    
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
  
    return(
        <>
          <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     ABUBABA <i className="fab fa-typo3"/>
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                 </div>
                 <ul className={click ? "nav-menu active" : "nav-menu"}>
                 <li className="nav-items">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                        Our Services
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                        Blogs
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                 </li>
                 <li className="nav-items">
                    <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                        Sign-Up
                    </Link>
                 </li>
                 </ul>
                 {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
             </div>
          </nav>
        </>
    );
}
export default Navbar;