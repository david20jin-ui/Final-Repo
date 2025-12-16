import React from 'react';
import './ExerciseLittleLemon.css';

export default function ExerciseLittleLemon() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="/logo192.png" alt="logo" />
          <span>Little Lemon</span>
        </div>
        <nav>
          <a href="#specials">Menu</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Order</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <p>
            Welcome to Little Lemon, a charming, family-owned restaurant
            nestled in the heart of Chicago that offers a delightful journey
            through the vibrant culinary landscape of the Mediterranean
            region.
          </p>
          <a className="btn" href="#">Reserve a Table</a>
        </div>
        <img src="/images/margherita-pizza-close.jpg" alt="Featured dish" />
      </section>

      <section className="section" id="specials">
        <h2>Specials</h2>
        <div className="specials">
          <article className="card">
            <img src="/images/dish1.png" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>
              Greek salad is a simple combination of chunky vegetables, feta
              cheese, Kalamata olives, olive oil, and oregano. It traditionally
              contains no lettuce.
            </p>
          </article>
          <article className="card">
            <img src="/images/dish2.png" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Toasted bread topped with marinated tomatoes, garlic and fresh herbs.</p>
          </article>
          <article className="card">
            <img src="/images/margherita-pizza-close.jpg" alt="Margherita Pizza" />
            <h3>Margherita Pizza</h3>
            <p>Classic pizza with tomato, mozzarella and basil.</p>
          </article>
        </div>

        <div className="testimonials" id="testimonials">
          <div className="quote">
            <strong>Tilly Young</strong>
            <div>4.5 ★</div>
          </div>
          <div className="quote">
            <strong>Mark Jones</strong>
            <div>5.0 ★</div>
          </div>
          <div className="quote">
            <strong>Brian Nguyen</strong>
            <div>4.2 ★</div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="ft-left">Little Lemon</div>
        <nav>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Jobs</a>
        </nav>
      </footer>
    </div>
  );
}
