import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Little Lemon</h1>
        <p>
          Welcome to Little Lemon, a charming, family-owned restaurant
          nestled in the heart of Chicago that offers a delightful journey
          through the vibrant culinary landscape of the Mediterranean
          region.
        </p>
        <Link className="btn" to="/book">Reserve a Table</Link>
      </div>
      <img src="/images/margherita-pizza-close.jpg" alt="Featured dish" />
    </section>
  );
}
