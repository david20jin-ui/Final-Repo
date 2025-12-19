// Mock Booking API for the exercise
// In a real app this would call a backend. We keep it small for the capstone.
const STORAGE_KEY = 'little-lemon-bookings';

export function fetchAvailableTimes(date) {
  // Mock available times — in a real app this would depend on date and backend
  return Promise.resolve(['18:00', '18:30', '19:00', '19:30', '20:00']);
}

export function submitBooking(booking) {
  return new Promise((resolve) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push({ ...booking, id: Date.now() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    // simulate network latency
    setTimeout(() => resolve({ success: true }), 250);
  });
}

export function getBookings() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export default { fetchAvailableTimes, submitBooking, getBookings };
