import { submitBooking, getBookings } from '../BookingAPI';

afterEach(() => {
  // clear storage after each test
  localStorage.clear();
  // restore real timers if a test used fake timers
  if (jest.isMockFunction(setTimeout)) jest.useRealTimers();
});

test('submitBooking writes booking to localStorage and getBookings returns it', async () => {
  jest.useFakeTimers();

  const booking = { name: 'Sam', email: 's@e.com', time: '18:00' };
  const p = submitBooking(booking);
  // fast-forward the timer that resolves the promise
  jest.runAllTimers();
  const res = await p;

  expect(res).toEqual({ success: true });

  const saved = getBookings();
  expect(Array.isArray(saved)).toBe(true);
  expect(saved.length).toBe(1);
  expect(saved[0]).toMatchObject(booking);
  expect(saved[0]).toHaveProperty('id');
});

test('getBookings returns empty array when no bookings stored', () => {
  localStorage.removeItem('little-lemon-bookings');
  const bookings = getBookings();
  expect(Array.isArray(bookings)).toBe(true);
  expect(bookings.length).toBe(0);
});
