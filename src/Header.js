// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>E-commerce Store</h1>
    <div className="logo">E-commerce Platform</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/ProductList">ProductList</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
   
  );
};

export default Header;

