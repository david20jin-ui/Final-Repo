import React from 'react';

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
        <a href="#book">Book</a>
        <a href="#contact">Order</a>
      </nav>
    </header>
  );
}
