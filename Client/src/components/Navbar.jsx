import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="container">
      <div className="nav">
        <div className="logo">FundMe</div>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/campaign')}>Campaigns</li>
          <li onClick={() => navigate('/')}></li>
          <li onClick={() => navigate('/about')}>About Us</li>
        </ul>
        <div>
          <span className="register" onClick={() => navigate('/register')}>Register</span>
          <span className="login" onClick={() => navigate('/login')}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
