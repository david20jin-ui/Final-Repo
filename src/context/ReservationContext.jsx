import React, { createContext } from 'react';

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  function reserve(booking) {
    // simplistic reservation handler — in a real app we'd call an API
    console.log('reserve', booking);
    // Note: available times are managed by the Main component in this exercise
  }

  return (
    <ReservationContext.Provider value={{ reserve }}>
      {children}
    </ReservationContext.Provider>
  );
}
