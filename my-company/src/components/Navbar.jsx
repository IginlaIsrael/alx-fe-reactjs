import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/services">Services</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
