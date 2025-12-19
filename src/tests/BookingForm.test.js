import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { ReservationProvider } from '../context/ReservationContext';

test('submitting the booking form shows confirmation', () => {
  render(
    <ReservationProvider>
      <BookingForm />
    </ReservationProvider>
  );

  // fill out name, email, date and pick a time
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'a@a.com' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });

  fireEvent.click(screen.getByRole('button', { name: /Request Reservation/i }));

  expect(screen.getByText(/Thank you — your reservation request is received!/i)).toBeInTheDocument();
});
