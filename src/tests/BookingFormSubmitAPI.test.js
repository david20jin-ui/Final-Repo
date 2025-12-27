import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

afterEach(() => {
  delete window.submitAPI;
});

test('submits via submitAPI and shows confirmation on success', async () => {
  window.submitAPI = jest.fn(async (data) => true);

  render(<BookingForm times={["18:00"]} updateTimes={() => {}} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Charlie' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'c@c.com' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText(/Time/i, { selector: 'select' }), { target: { value: '18:00' } });

  fireEvent.click(screen.getByRole('button', { name: /Request Reservation/i }));

  expect(await screen.findByText(/Thank you — your reservation request is received!/i)).toBeInTheDocument();
  expect(window.submitAPI).toHaveBeenCalled();
});

test('shows error message when submitAPI returns false', async () => {
  window.submitAPI = jest.fn(async () => false);

  render(<BookingForm times={["18:00"]} updateTimes={() => {}} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Charlie' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'c@c.com' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-12-25' } });
  fireEvent.change(screen.getByLabelText(/Time/i, { selector: 'select' }), { target: { value: '18:00' } });

  fireEvent.click(screen.getByRole('button', { name: /Request Reservation/i }));

  expect(await screen.findByText(/Submission failed/i)).toBeInTheDocument();
  expect(window.submitAPI).toHaveBeenCalled();
});
