import React from 'react';

function Card({ src, alt, title, children }) {
  return (
    <article className="card">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default function Specials() {
  return (
    <section className="section" id="specials">
      <h2>Specials</h2>
      <div className="specials">
        <Card src="/images/dish1.png" alt="Greek Salad" title="Greek Salad">
          Greek salad is a simple combination of chunky vegetables, feta cheese, Kalamata olives, olive oil, and oregano.
        </Card>
        <Card src="/images/dish2.png" alt="Bruschetta" title="Bruschetta">
          Toasted bread topped with marinated tomatoes, garlic and fresh herbs.
        </Card>
        <Card src="/images/margherita-pizza-close.jpg" alt="Margherita Pizza" title="Margherita Pizza">
          Classic pizza with tomato, mozzarella and basil.
        </Card>
      </div>
    </section>
  );
}
