import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ 
      backgroundColor: '#D2B48C', 
      padding: '10px', 
      fontFamily: 'Arial, sans-serif', 
      color: 'white', 
      fontSize: '24px', 
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
        
      <div style={{ textAlign: 'center' }}>
        <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>Home</Link>
        <Link to="/products" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>Products</Link>
        <Link to="/services" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>Services</Link>
        <Link to="/contact" style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
