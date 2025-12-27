const DEFAULT_TIMES = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

export function initializeTimes() {
  if (typeof fetchAPI === 'function') {
    try {
      // fetchAPI expects a Date — provide today's date
      return fetchAPI(new Date());
    } catch (e) {
      // fall back to defaults on error
      return DEFAULT_TIMES;
    }
  }
  return [...DEFAULT_TIMES];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof fetchAPI === 'function') {
        try {
          // action.date may be a string — convert to Date
          const date = action.date ? new Date(action.date) : new Date();
          return fetchAPI(date);
        } catch (e) {
          return initializeTimes();
        }
      }
      return initializeTimes();
    case 'RESERVE_TIME':
      return state.filter((t) => t !== action.time);
    default:
      return state;
  }
}
