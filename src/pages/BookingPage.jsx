import React from 'react';
import '../pages/BookingPage.css';
import BookingForm from '../components/BookingForm';

export default function BookingPage() {
  return (
    <section className="book-page" id="book">
      <div className="book-inner">
        <div className="book-info">
          <h2>Book a Table</h2>
          <p>
            Reserve a table for your next visit. Fill out the form and we'll
            confirm your reservation shortly.
          </p>
        </div>
        <div className="book-form">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
