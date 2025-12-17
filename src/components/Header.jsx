import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo192.png" alt="logo" />
        <span>Little Lemon</span>
      </div>
      <nav>
        <a href="#specials">Menu</a>
        <a href="#testimonials">Reviews</a>
        <Link to="/book">Book</Link>
        <a href="#contact">Order</a>
      </nav>
    </header>
  );
}
