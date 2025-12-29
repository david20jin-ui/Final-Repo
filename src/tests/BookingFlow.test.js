import { createSubmitForm } from '../utils/createSubmitForm';

afterEach(() => {
  delete window.submitAPI;
});

test('createSubmitForm calls submitAPI and navigates to confirmation page when it returns true', async () => {
  const mockNavigate = jest.fn();
  const submit = createSubmitForm(mockNavigate);
  window.submitAPI = jest.fn(async (data) => true);

  const formData = { name: 'Test', email: 't@t.com' };
  await submit(formData);

  expect(window.submitAPI).toHaveBeenCalledWith(formData);
  expect(mockNavigate).toHaveBeenCalledWith('/confirmed');
});

test('createSubmitForm falls back to BookingAPI and navigates when success', async () => {
  const mockNavigate = jest.fn();
  const submit = createSubmitForm(mockNavigate);

  // mock BookingAPI (default export)
  const BookingAPI = require('../BookingAPI').default;
  jest.spyOn(BookingAPI, 'submitBooking').mockImplementation(async () => ({ success: true }));

  const formData = { name: 'Fallback', email: 'f@f.com' };
  await submit(formData);

  expect(BookingAPI.submitBooking).toHaveBeenCalledWith(formData);
  expect(mockNavigate).toHaveBeenCalledWith('/confirmed');
});
