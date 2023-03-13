
import React, { useContext, useEffect, useState } from 'react';
import './header.css';
import { StrogeData } from '../../components/context/Context';
import { Link } from 'react-router-dom';


const Header = () => {
  const [navStyle, setNavStyle] = useState({left: '-1000px'})
  const [cartCount, setCartCount] = useContext(StrogeData)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    const countTotal = Object.entries(cartCount).reduce(function (total, pair) {
      const [key, value] = pair;
      return total + value.price
    }, 0);
    setTotalPrice(Math.floor(countTotal))
  }, [cartCount])

  return (
    <div className='navbar py-4'>
      <div className="container">
        <Link to="/" className='logo'>Dev Storge</Link>
        <i class="fa-solid fa-bars menu-bar" onClick={() => setNavStyle({left: '0px'})}></i>
        <div className="menu" style={navStyle}>
          <i class="fa-solid fa-xmark remove-bar ms-auto" onClick={() => setNavStyle({left: '-1000px'})}></i>
          <ul className='navbar-list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <div className='position-relative'>
            <button className='btn btn-outline-dark me-2'>My Account</button>
            <span className='pe-1 ps-1 fw-bold'>${cartCount ? totalPrice : 0.00}</span>
            <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
            <span className='shoping-icon'>{cartCount?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;