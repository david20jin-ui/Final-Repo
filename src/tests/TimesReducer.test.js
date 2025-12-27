import { initializeTimes, updateTimes } from '../utils/times';

afterEach(() => {
  delete global.fetchAPI;
});

test('initializeTimes returns expected initial times array when no API', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times).toEqual(['18:00', '18:30', '19:00', '19:30', '20:00', '20:30']);
});

test('initializeTimes uses fetchAPI when available', () => {
  global.fetchAPI = jest.fn(() => ['12:00', '13:00']);
  const times = initializeTimes();
  expect(global.fetchAPI).toHaveBeenCalled();
  expect(times).toEqual(['12:00', '13:00']);
});

test('updateTimes with UPDATE_TIMES uses fetchAPI(date) when available', () => {
  global.fetchAPI = jest.fn(() => ['21:00']);
  const state = ['foo'];
  const next = updateTimes(state, { type: 'UPDATE_TIMES', date: '2025-12-25' });
  expect(global.fetchAPI).toHaveBeenCalledWith(new Date('2025-12-25'));
  expect(next).toEqual(['21:00']);
});

test('updateTimes with RESERVE_TIME removes the reserved time', () => {
  const state = ['18:00', '19:00'];
  const next = updateTimes(state, { type: 'RESERVE_TIME', time: '18:00' });
  expect(next).toEqual(['19:00']);
});
