import React from 'react';
import { render, screen } from '@testing-library/react';
import Specials from '../components/Specials';
import bookingData from '../utils/bookingData';

test('displays bookings table with bookingData rows', () => {
  render(<Specials />);
  // table is present
  expect(screen.getByRole('table', { name: /bookings-table/i })).toBeInTheDocument();
  // headers
  expect(screen.getByText(/Name/)).toBeInTheDocument();
  expect(screen.getByText(/Email/)).toBeInTheDocument();
  // sample data from bookingData
  const first = bookingData[0];
  expect(screen.getByText(first.name)).toBeInTheDocument();
  expect(screen.getByText(first.email)).toBeInTheDocument();
});
