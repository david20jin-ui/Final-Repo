import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import { initializeTimes, updateTimes } from '../utils/times';
import { createSubmitForm } from '../utils/createSubmitForm';

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  const handleUpdateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  const reserve = (booking) => {
    console.log('reserve', booking);
    dispatch({ type: 'RESERVE_TIME', time: booking.time });
  };

  const submitForm = createSubmitForm(navigate);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/book"
          element={<BookingPage availableTimes={availableTimes} updateTimes={handleUpdateTimes} reserve={reserve} submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
