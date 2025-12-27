import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import { initializeTimes, updateTimes } from '../utils/times';

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  const handleUpdateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  const reserve = (booking) => {
    console.log('reserve', booking);
    dispatch({ type: 'RESERVE_TIME', time: booking.time });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/book"
          element={<BookingPage availableTimes={availableTimes} updateTimes={handleUpdateTimes} reserve={reserve} />}
        />
      </Routes>
    </main>
  );
}
