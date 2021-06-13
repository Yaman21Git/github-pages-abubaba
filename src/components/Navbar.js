import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import imgSearch from '../images2/search_icon.jpg'
import searchIcon from '../images2/Frame.png'
import cartIcon from '../images2/Group.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg> */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <div style={{position:"absolute", left:"27%",height:"100%",width:"5%",backgroundColor:"black"}}></div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MY ACCOUNT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SHOP
              </Link>
            </li> 

            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                CONTACT
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BLOGS
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          <Link to="/"><div className="abubabaLogo">
          </div></Link>

          <div className="icons">
            <Link to="/search"><img  className="search-icon" src={searchIcon} alt="search"/></Link>
            <Link to='/cart'><img className="cart-icon" src={cartIcon}/></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
{/* <i class="fa fa-search fa-2x" aria-hidden="true" style={{color:"white",marginRight:"10%"}}></i> */}
export default Navbar;