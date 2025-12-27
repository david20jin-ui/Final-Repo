import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { ReservationProvider } from '../context/ReservationContext';

test('renders the BookingForm heading', () => {
  render(
    <ReservationProvider>
      <BookingForm times={["18:00"]} updateTimes={() => {}} />
    </ReservationProvider>
  );
  expect(screen.getByText(/Book Now/i)).toBeInTheDocument();
});
