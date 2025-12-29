import React from 'react';
import bookingData from '../utils/bookingData';

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
        <Card src="/images/dish3.png" alt="Greek Salad" title="Greek Salad">
          Greek salad is a simple combination of chunky vegetables, feta cheese, Kalamata olives, olive oil, and oregano.
        </Card>
        <Card src="/images/hero.png" alt="Bruschetta" title="Bruschetta">
          Toasted bread topped with marinated tomatoes, garlic and fresh herbs.
        </Card>
        <Card src="/images/margherita-pizza-close.jpg" alt="Margherita Pizza" title="Margherita Pizza">
          Classic pizza with tomato, mozzarella and basil.
        </Card>
      </div>

      <div className="bookings">
        <h3>Bookings</h3>
        <table className="bookings-table" aria-label="bookings-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Size</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((b, i) => (
              <tr key={i}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.size}</td>
                <td>{b.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
