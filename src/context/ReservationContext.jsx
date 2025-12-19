import React, { createContext, useState } from 'react';

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [times, setTimes] = useState([
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ]);

  function reserve(booking) {
    // simplistic reservation handler — in a real app we'd call an API
    console.log('reserve', booking);
    // optionally remove the selected time to simulate booking
    setTimes((t) => t.filter((time) => time !== booking.time));
  }

  return (
    <ReservationContext.Provider value={{ times, reserve }}>
      {children}
    </ReservationContext.Provider>
  );
}
