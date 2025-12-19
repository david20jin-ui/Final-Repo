import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </main>
  );
}
