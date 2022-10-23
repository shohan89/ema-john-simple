import React from 'react';
import './Header.css'
import logo from "../../images/Logo.svg"

const Header = () => {
  return (
    <nav className='header'>
      <img src={ logo } alt="" />
      <div>
        <a href="/shop" target="_blank" rel="noopener noreferrer">Shop</a>
        <a href="orders" target="_blank" rel="noopener noreferrer">Orders</a>
        <a href="inventory" target="_blank" rel="noopener noreferrer">Inventory</a>
        <a href="about" target="_blank" rel="noopener noreferrer">About</a>
      </div>
    </nav>
  );
};

export default Header;