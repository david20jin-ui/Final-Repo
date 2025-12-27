import React, { useState } from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import BookingPage from '../pages/BookingPage';

// use a simple wrapper to mimic parent state management
function TestWrapper() {
  const [availableTimes, setAvailableTimes] = useState(['18:00','18:30','19:00','19:30']);

  const updateTimes = () => {
    // noop for this test
  };

  const reserve = (booking) => {
    setAvailableTimes((t) => t.filter((time) => time !== booking.time));
  };

  return <BookingPage availableTimes={availableTimes} updateTimes={updateTimes} reserve={reserve} />;
}

test('reserving a time removes it from available times list', () => {
  render(<TestWrapper />);

  const timesContainer = screen.getByLabelText(/available-times/i);

  // ensure the time is present initially within the available-times block
  expect(within(timesContainer).getByText('18:00')).toBeInTheDocument();

  // fill out and submit the booking form
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Bob' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'b@b.com' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText(/Time/i, { selector: 'select' }), { target: { value: '18:00' } });

  fireEvent.click(screen.getByRole('button', { name: /Request Reservation/i }));

  // the selected time should be removed from the available times list
  expect(within(timesContainer).queryByText('18:00')).not.toBeInTheDocument();
});
