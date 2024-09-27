// src/components/NavLinks.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/find-questions">Find Questions</Link>
      <Link to="/post">Post</Link>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </nav>
  );
};

export default NavLinks;
