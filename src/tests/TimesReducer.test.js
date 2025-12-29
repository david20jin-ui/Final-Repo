import { initializeTimes, updateTimes } from '../utils/times';

afterEach(() => {
  delete global.fetchAPI;
});

test('initializeTimes returns expected initial times array when no API', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times).toEqual(['18:00', '18:30', '19:00', '19:30', '20:00', '20:30']);
});

test('initializeTimes uses fetchAPI when available and returns a non-empty array', () => {
  global.fetchAPI = jest.fn(() => ['12:00', '13:00']);
  const times = initializeTimes();
  expect(global.fetchAPI).toHaveBeenCalled();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes with UPDATE_TIMES uses fetchAPI(date) when available (pre-selected date provided)', () => {
  global.fetchAPI = jest.fn(() => ['21:00']);
  const state = ['foo'];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-25' };
  const next = updateTimes(state, action);
  // ensure fetchAPI received a Date object constructed from the provided pre-selected date
  expect(global.fetchAPI).toHaveBeenCalled();
  const calledWith = global.fetchAPI.mock.calls[0][0];
  expect(calledWith instanceof Date).toBe(true);
  expect(calledWith.toISOString().slice(0,10)).toBe(new Date(action.date).toISOString().slice(0,10));
  expect(next).toEqual(['21:00']);
});

test('updateTimes with RESERVE_TIME removes the reserved time', () => {
  const state = ['18:00', '19:00'];
  const next = updateTimes(state, { type: 'RESERVE_TIME', time: '18:00' });
  expect(next).toEqual(['19:00']);
});
